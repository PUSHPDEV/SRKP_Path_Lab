import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  integerRegex = /^\d+$/;
  emailRegex = ('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

  submitForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    message: new FormControl("", [Validators.required, Validators.maxLength(32)]),
  })

  getControl(name: any): AbstractControl | null {
    return this.submitForm.get(name);
  }
  
  submitFn() {
    console.log(this.submitForm.value)
  }
}


