import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  selectedRole: string = '';
  user: any = {
    name: '',
    contact: '',
    password: '',
    institute: '',
    qualification: '',
    experience: '',
    domain: '',
    highestQualification: '',
    course: ''
  };

  constructor(private router: Router) {}

  // onSignup() {
  //   // Handle the signup logic here
  //   console.log('Selected Role:', this.selectedRole);
  //   console.log('User Data:', this.user);
  //   // Add logic to send this data to your backend for registration
  //   this.router.navigate(['/login']);
  // }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
