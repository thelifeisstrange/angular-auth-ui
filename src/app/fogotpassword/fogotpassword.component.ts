import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fogotpassword',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fogotpassword.component.html',
  styleUrl: './fogotpassword.component.css'
})
export class FogotpasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Handle the password reset logic here
    console.log('Email for password reset:', this.email);
    // Send the email to your backend to initiate password reset

    // After handling, you can navigate back or show a success message
    // alert('If this email is registered, a password reset link will be sent.');
    // this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  
}
