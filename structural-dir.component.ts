import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visible:boolean=true;
   isDiv2Visible:boolean=true;
   num1:string='';
   num2:string='';
   isActive:boolean=false;
   country:string='';
   cityName:string[]=['Pune','mumbai','Nagpur','Kolhapur'];


  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }
  toggleDiv2(){
     this.isDiv2Visible= !this.isDiv2Visible
  }
}
