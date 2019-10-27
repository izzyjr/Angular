import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  allowNewSubmission = false;
  name = 'Form-Email';
  email = '';
  password = 'Not databinding';
  correct = false;

  constructor() {
  }

  ngOnInit() {
  }

  inputUpdateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
    if (this.email !== '') {
      this.toggleEditable(event);
    }
  }

  toggleEditable(event) {
    if (event.target.checked) {
      this.allowNewSubmission = true;
      console.log('hello');
    } else {
      this.allowNewSubmission = false;
    }
  }

}
