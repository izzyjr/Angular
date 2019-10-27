import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  allowNewSubmission = false;
  formName = 'Form-Databinding';
  email = '';
  firstName = '';
  newMember = '';
  constructor() {
  }

  ngOnInit() {
  }

  inputUpdateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  toggleEditable(event) {
      if (this.email !== '' && this.firstName !== '') {
        if (event.target.checked) {
          this.allowNewSubmission = true;
        } else {
          this.allowNewSubmission = false;
        }
      }
  }

  submitForm() {
    this.newMember = this.firstName + ' has successfully subscribed with email: ' + this.email;
  }
}
