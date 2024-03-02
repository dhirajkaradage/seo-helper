import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  nestedArrayPracticeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.nestedArrayPracticeForm = this.fb.group({
      weightVariants: this.fb.array([this.weightVarient()]),
    });
  }

  get weightVariantsArray() {
    return this.nestedArrayPracticeForm.get("weightVariants") as FormArray;
  }

  getcolourVariants(index: number): FormArray {
    return this.weightVariantsArray
      .at(index)
      .get("colourVariants") as FormArray;
  }

  addMoreWeightVarient() {
    this.weightVariantsArray.push(this.weightVarient());
  }

  weightVarient() {
    return this.fb.group({
      weightMaster: this.fb.group({
        id: [null],
      }),
      colourVariants: this.fb.array([this.colourVariantsGroup()]),
    });
  }

  addMorecolourVariants(index: number) {
    this.getcolourVariants(index).push(this.colourVariantsGroup());
  }

  removecolourVariants(index: number, ind: number) {
    this.getcolourVariants(index).removeAt(ind);
  }

  colourVariantsGroup() {
    return this.fb.group({
      colourMaster: this.fb.group({
        id: [null],
        salePrice: [null],
        discount: [null],
        regularPrice: [null],
        isActive: [true],
      }),
    });
  }

  // "weightVariants": [
  //   {
  //       "weightMaster": {
  //           "id": 1
  //       },
  //       "colourVariants": [
  //           {
  //               "colourMaster": {
  //                   "id": 1
  //               },
  //               "salePrice": 200.00,
  //               "discount": 50.00,
  //               "regularPrice": 400.00,
  //               "isActive": true
  //           },
  //           {
  //               "colourMaster": {
  //                   "id": 2
  //               },
  //               "salePrice": 200.00,
  //               "discount": 50.00,
  //               "regularPrice": 400.00,
  //               "isActive": false
  //           }
  //       ]
  //   },
  // ]
}
