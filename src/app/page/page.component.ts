import { Component, OnInit } from '@angular/core';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg00.jpg'
  };

  name = 'Pankaj';

  teams = [
    {
      name: 'Team 1',
      members: [
        {
          name: 'Member 1',
          image: 'assets/bg00.jpg'
        },
        {
          name: 'Member 2',
          image: 'assets/bg00.jpg'
        },
        {
          name: 'Member 3',
          image: 'assets/bg00.jpg'
        },
        {
          name: 'Member 4',
          image: 'assets/bg00.jpg'
        }
      ]
    },
    {
      name: 'Team 2',
      members: [
        {
          name: 'Member 1',
          image: 'assets/bg00.jpg'
        },
        {
          name: 'Member 2',
          image: 'assets/bg00.jpg'
        },
        {
          name: 'Member 3',
          image: 'assets/bg00.jpg'
        },
        {
          name: 'Member 4',
          image: 'assets/bg00.jpg'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
