import {AfterViewInit, Component, ElementRef, Input, ViewChild} from "@angular/core";
import {Spinner} from "spin.js";

@Component({
  selector: "ccSpinner",
  template: `
    <div class="spinner"
         [hidden]="!isLoading">
      <span #spinnerEl></span>
      <p>{{ message }}</p>
    </div>
  `
})

export class SpinnerComponent implements AfterViewInit {
  @Input() public isLoading: boolean;
  @Input() public message: string;

  @ViewChild("spinnerEl")
  private spinnerEl: ElementRef;

  ngAfterViewInit() {
    let spinner = new Spinner({radius: 8, width: 5, length: 3, lines: 9});
    spinner.spin(this.spinnerEl.nativeElement);
  }
}
