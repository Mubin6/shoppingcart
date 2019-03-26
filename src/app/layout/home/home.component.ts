import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardImages = [];
  constructor() { }

  ngOnInit() {
    this.cardImages = [
      {image: '/assets/images/home-img.jpg'},
      {image: '/assets/images/homeImg1.jpg'},
      {image: '/assets/images/home-img.jpg'}
    ];
  }

}
