import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worship',
  templateUrl: './worship.component.html',
  styleUrls: ['./worship.component.scss']
})
export class WorshipComponent implements OnInit {
  heroBgURL = '/assets/images/hero-worship.jpg';

  worshipNav = [
    {
      href: 'about',
      scroll: true,
      text: 'About Radiant Worship'
    },
    {
      href: 'serve',
      scroll: true,
      text: 'Getting Involved'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
