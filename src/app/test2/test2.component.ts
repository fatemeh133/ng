import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LogService } from '../services/log.service';

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
  inputText: string = '';

  constructor(
    private router: Router,
    private ActiveRoute: ActivatedRoute,
    private LogService: LogService
  ) {
    console.log(this.toolID);
  }

  details(id: number) {
    this.router.navigate(['/Test2Page', id], { relativeTo: this.ActiveRoute });
  }
  ngOnInit(): void {
    // this.toolID = parseInt(this.ActiveRouter.snapshot.paramMap.get('id')!);
    this.ActiveRoute.paramMap.subscribe((param: ParamMap) => {
      this.toolID = parseInt(param.get('id')!);
    });
  }
  goNext() {
    if (this.toolID < 2) {
      this.router.navigate(['../', this.toolID + 1], {
        relativeTo: this.ActiveRoute,
      });
    }
  }
  goPrev() {
    if (this.toolID > 1) {
      this.router.navigate(['../', this.toolID - 1], {
        relativeTo: this.ActiveRoute,
      });
    }
  }
  goBack() {
    this.router.navigate(['../', { id: this.toolID }], {
      relativeTo: this.ActiveRoute,
    });
  }
  goSub() {
    this.router.navigate(['sub-page'], {
      relativeTo: this.ActiveRoute,
    });
  }
  sendInputValue() {
    console.log(this.inputText);

    this.LogService.emiterfunc(this.inputText);
  }
}
