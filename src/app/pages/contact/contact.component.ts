import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailingService } from 'src/app/services/mailing.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup;
  apiId

  constructor(
    private formBuilder: FormBuilder,
    private mailingService: MailingService
  ) { }

  ngOnInit() {
    this.FormData = this.formBuilder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  submitContactForm(contactForm: FormGroup) {
    if (contactForm.valid) {
      this.mailingService.sendMail(contactForm);
    }
  }
}
