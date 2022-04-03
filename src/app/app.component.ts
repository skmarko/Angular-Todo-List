import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Angular';
  constructor(){
    setTimeout(() => {
      this.title= "Codning World "
      
    }, 2000);
  }

  }

