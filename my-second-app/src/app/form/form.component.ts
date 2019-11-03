import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  allowNewSubmission = false;
  formName = 'Click Submit';
  email = '';
  firstName = '';
  newMember = '';
  checkBox = false;
  bridge = '';
  password = '';
  display = false;
  log = [];
  showSecret = false;
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
          this.checkBox = true;
          this.allowNewSubmission = true;
        } else {
          this.allowNewSubmission = false;
        }
      }
  }

  submitForm() {
    this.newMember = this.firstName + ' has successfully subscribed with email: ' + this.email;
  }

  toggle() {
    if (!this.display) {
      this.display = true;
    } else if (this.display) {
      this.display = false;
    }
  }

  updatePassword($event: Event) {
    return this.bridge = (event.target as HTMLInputElement).value;
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
