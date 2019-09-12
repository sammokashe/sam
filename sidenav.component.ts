import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  opened=false;
  Num:any;
  name:any="user234";
 
 
  set(event:any)
  {
    switch(event){ 
     case 0:
       this.router.navigate(["/sidenav/prouction"]);
     break;
     case 1:
         this.router.navigate(["/sidenav/crumb"]);
     break;
     case 2:
         this.router.navigate(["/sidenav/solution"]);
     break;
     case 3:
         this.router.navigate(["/sidenav/modular"]);
     break;
     case 4:
         this.router.navigate(["/sidenav/color/color-name"]);
     break;
     case 5:
         this.router.navigate(["/sidenav/color/color-code"]);
     break;
     case 6:
         this.router.navigate(["/sidenav/payrole"]);
     break;
     default:
       alert("error");
       
   }
  }
  constructor(private router:Router) { }

  ngOnInit() {}

}