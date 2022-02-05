import { Component, OnInit } from '@angular/core';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';

export interface CardsData {
  title: string;
  description: string;
}
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

  projectsData = [
    {
      name: 'AlgoViz',
      image: 'assets/bg00.jpg'
    },
    {
      name: 'Chatterbox',
      image: 'assets/bg00.jpg'
    },
    {
      name: 'Kronos',
      image: 'assets/bg00.jpg'
    },
    {
      name: 'Youtube Downloader',
      image: 'assets/bg00.jpg'
    },
    {
      name: 'Movie Recommendation System',
      image: 'assets/bg00.jpg'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
