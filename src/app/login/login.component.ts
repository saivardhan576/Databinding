import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  names:string[]=['sai','vishnu','mani','lokesh'];
  marks:number[]=[1,2];

  objArray: Array<Object>=[
    {eid:1,fname:'Sai'},
    {eid:2,fname:'Lokesh'},

  ]

  @Input() varpc:any;
  ctop:string="This is comming from child to parent"
  outputChildMsg:string="Using Event Emitter - C to P";
  @Output() msgEvent=new EventEmitter<String>();

  sendMessage(){
    this.msgEvent.emit(this.outputChildMsg);
  }
  msg:string='';
  buttonClick(data:string){
    this.msg=data;
  }
  // constructor(varpc:string){
  //   this.varpc=varpc;
  // }

}
