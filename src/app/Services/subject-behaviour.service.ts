import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectBehaviourService {

  subjectValue = new Subject

  constructor() { }

  setValueToSubject(value: any){
    this.subjectValue.next((res:any)=>{
      console.log('this is value ', value);
      
      console.log('this is response ', res);
      console.log('this is subject value ', this.subjectValue);
      
    })
  }
}
