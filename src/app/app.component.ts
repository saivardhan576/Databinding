import { keyframes } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Databinding';
  color="white";
  varctop:string='';
  emitCtoP:string='';
  @ViewChild(LoginComponent) childobj:any;

  ngAfterViewInit(){
    console.log(this.childobj);
    this.varctop=this.childobj.ctop;
  }

  receiveMessage($event:any){
    this.emitCtoP=$event;
  }
  // sum:number=5/0;
  // imageUrl:string="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1024px-Chennai_Super_Kings_Logo.svg.png";
  // imgUrl:string="https://w0.peakpx.com/wallpaper/689/917/HD-wallpaper-ms-dhoni-chennai-super-kings-cricket-csk-definitely-not-india-sports.jpg";

  // onewaydata: string="This data going from model to html";
  // twowaydata: string="This is Two way binding";


  // oneWay(){
  //   console.log(this.onewaydata);
  // }
  // twoWay(){
  //   console.log(this.twowaydata);
  // }



  // changecolor:boolean=true;
  // buttonClick(){
  //   console.log("Button is clicked");
  // }
  // onKeyUp(){
  //   console.log("Key pressed");    
  // }
  // onKeyUps($event: any){
  //   if($event.keyCode== 13)
  //     console.log($event);
  // }

  // onKeyUpInput(name:string){
  //   console.log("Entered name is "+name);
  // }
}
