import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    console.log(1+":"+this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ADMIN');
      this.showUserBoard = this.roles.includes('USER');

      this.username = user.username;
    }
  }

  logout(): void {
    console.log(2);
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        
       
      },
      error: err => {
        console.log(err);
      }
    });
    
    window.location.reload();
  }
}