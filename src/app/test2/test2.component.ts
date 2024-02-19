import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { log } from 'console';
type frontTools = [{ id: number; name: string }];
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css',
})
export class Test2Component implements OnInit {
  frontTools: any = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
  ];
  toolID: number = 0;

  constructor(private router: Router, private ActiveRouter: ActivatedRoute) {
    console.log(this.toolID);
  }

  details(id: number) {
    this.router.navigate(['/Test2', id]);
  }
  ngOnInit(): void {
    // this.toolID = parseInt(this.ActiveRouter.snapshot.paramMap.get('id')!);
    this.ActiveRouter.paramMap.subscribe((param: ParamMap) => {
      this.toolID = parseInt(param.get('id')!);
    });
  }
  goNext() {
    if (this.toolID < 2) {
      this.router.navigate(['/Test2', this.toolID + 1]);
    }
  }
  goPrev() {
    if (this.toolID > 1) {
      this.router.navigate(['/Test2', this.toolID - 1]);
    }
  }
  goBack() {
    this.router.navigate(['/Test2', { id: this.toolID }]);
  }
}
