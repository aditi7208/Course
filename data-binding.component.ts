import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string="Angular 18";
  stateName="Maharashtra";
  inputType="radio";
  myClassName:string="bg-primary";
  rollNo:number=123;
  isIndian:boolean=true;
  currentDate:Date=new Date();
  firstName=signal("Chetan");

  constructor(){

  }

  changeCourseName(){
    this.courseName="React.js";
    this.firstName.set("Sachin");
  }

  showAlert(message:string){
    console.log(message);
  }
}
