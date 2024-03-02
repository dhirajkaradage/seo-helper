import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userInputData: any;
  finalOutput: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  replaceCommaLine(data: any) {
    //convert string to array and remove whitespace
    let dataToArray = data.split(",").map((item: any) => item.trim());
    //convert array to string replacing comma with new line
    return dataToArray.join("\n");
  }

  convertUserData() {
    let userValue = this.userInputData;
    console.log("this is user value ", userValue);
    this.finalOutput = this.replaceCommaLine(userValue);
    console.log("this is final value ", this.finalOutput);
  }

  onResetBtn() {
    this.userInputData = null;
    this.finalOutput = null;
  }


}
