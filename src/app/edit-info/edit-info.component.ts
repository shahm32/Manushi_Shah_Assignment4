import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user.model';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrl: './edit-info.component.css'
})
export class EditInfoComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    streetName: '',
    postalCode: '',
    city: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/personal-info']);
  }
}
