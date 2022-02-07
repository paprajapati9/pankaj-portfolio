import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  private mailApiId: string = 'xoqreyoj';

  private apiUrl: string = 'https://formspree.io/';

  constructor(
    private http: HttpClient
  ) { }

  sendMail(form: FormGroup) {
    const email = form.value;
    console.log(email, "email");
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.apiUrl + this.mailApiId,
      { name: email.Fullname, replyto: email.Email, message: email.Comment },
      { 'headers': headers }
    ).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
