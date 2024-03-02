import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectBehaviourService } from '../Services/subject-behaviour.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  userRegistrationForm!: FormGroup;
  usingFormBuilder!: FormGroup

  testingPipes = 'testing Pipes'

  testingPercentPipe = 55.00

  constructor(private fb: FormBuilder, private subjectService: SubjectBehaviourService) { }

  ngOnInit(): void {
    this.userRegistrationForm = new FormGroup({
      userName: new FormControl(),
      emailId: new FormControl()
    })

    this.usingFormBuilder = this.fb.group({
      userName: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
      emailId: '',
      address: this.fb.group({
        street1: new FormControl()
      }),
      mobileNos: this.fb.array([])
    })

  }

  click(){
    this.subjectService.setValueToSubject('test value')
  }

  get controlls(){
    return this.usingFormBuilder.controls
  }

  get mobileNosArray(){
    return this.usingFormBuilder.get('mobileNos') as FormArray;
  }

  addNewContactNo(){
    this.mobileNosArray.push(this.addNumber())
  }

  addNumber(){
    return this.fb.group({
      number: new FormControl()
    })
  }

  removeNo(i: number){
    this.mobileNosArray.removeAt(i)
  } 



}
