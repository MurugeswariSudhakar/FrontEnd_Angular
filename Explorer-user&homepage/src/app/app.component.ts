import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Explorer';

  constructor(private router: Router) {}

  gotoUserList(){
      this.router.navigate(['admin/searchbyname']);  // define your component where you want to go
  }
}
