import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = 'user';
  password: string = '12345';

  constructor(private router: Router) {}

  onSubmit() {
    // Simulate user login
    const user: User = {
      firstName: 'Manushi',
      lastName: 'Shah',
      emailAddress: this.username,
      phoneNumber: '123-456-7890',
      streetName: 'Main St',
      postalCode: '12345',
      city: 'New York'
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/personal-info']);
  }

}
