import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-crash-todolist';

  constructor(){
    this.changeName('fuck');
    console.log(this.title);
  }

  changeName(name:string):void{
    this.title = name;
  }
}

