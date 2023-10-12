import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import * as angular from "angular";
import { Spinner } from "spin.js";

@Component({
  selector: "ccSpinner",
  templateUrl: "./spinner.component.html",
})
export class SpinnerComponent implements AfterViewInit {
  @Input()
  protected isLoading: boolean = false;
  @Input()
  protected message: string = 'Loading...';
  @ViewChild('spinnerEl', {static: true})
  protected spinnerEl!: ElementRef;

  ngAfterViewInit(): void {
    const spinner = new Spinner({
      lines: 9,
      radius: 8,
      width: 5,
      length: 3,
    });
    spinner.spin(this.spinnerEl.nativeElement);
  }

}

angular.module("codecraft").directive('ccSpinner', downgradeComponent({component: SpinnerComponent, inputs: ['isLoading', 'message']}));
