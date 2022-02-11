import { Component, OnInit } from '@angular/core';

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
    image: 'assets/images/algoviz.png'
  };

  name = 'Pankaj';

  projectsData = [
    {
      name: 'AlgoViz',
      image: 'assets/images/algoviz.png'
    },
    {
      name: 'Chatterbox',
      image: 'assets/images/chatterbox.png'
    },
    {
      name: 'Kronos Website',
      image: 'assets/images/kronos.png'
    },
    {
      name: 'Youtube Downloader',
      image: 'assets/images/youtube-downloader.png'
    },
    {
      name: 'Movie Recommendation System',
      image: 'assets/images/movie-recommendation.png'
    },
  ]

  blogsData = [
    {
      name: 'Auto Changing Theme',
      image: 'assets/images/light-dark.png',
      link: 'https://towardsdev.com/creating-an-auto-changing-theme-website-based-on-user-time-785d22c63705'
    },
    {
      name: 'Chatterbox',
      image: 'assets/images/chatterbox.png'
    },
    {
      name: 'Kronos Website',
      image: 'assets/images/kronos.png'
    },
    {
      name: 'Youtube Downloader',
      image: 'assets/images/youtube-downloader.png'
    },
    {
      name: 'Movie Recommendation System',
      image: 'assets/images/movie-recommendation.png'
    },
  ]

  contactImage = 'assets/images/sky.png';

  constructor() { }

  ngOnInit() {
  }

}
