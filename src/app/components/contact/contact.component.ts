import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule] // Import ReactiveFormsModule here
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get email(): string {
    return 'krish.singh2002@gmail.com';
  }

  get comment() {
    return this.contactForm.get('comment');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/krishmeet/', '_blank');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
