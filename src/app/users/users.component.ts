import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: {name:string,
        age:number}
        userArray=[{name:"Peter",age:"33"},{name:"Bruce ",age:"40"},{name:"Sam",age:"23"},{name:"Dean ",age:"50"}]
        flag:boolean=true;
        
        constructor() { }

  ngOnInit() {
  }

  flagClicked(){
    this.flag=!this.flag;
    console.log(this.flag);
  }
}
