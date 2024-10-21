import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  selectedRole: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Role:', this.selectedRole);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgotpassword']);
  }

}
