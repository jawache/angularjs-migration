import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Spinner } from "spin.js";

@Component({
  selector: "ccSpinner",
  templateUrl: "./spinner.component.html",
})
export class SpinnerComponent implements AfterViewInit {
  @Input() isLoading: boolean = false;
  @Input() message: string = 'Loading...';
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
