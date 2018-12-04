import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-retreat',
  templateUrl: './retreat.component.html',
  styleUrls: ['./retreat.component.scss']
})
export class RetreatComponent implements OnInit {
  starsLoopUrl: string =
    'assets/videos/Simple Stars - HD Video Background Loop (1).mp4';
  intoNightLogoUrl: string = 'assets/images/retreat/retreat-logo-light.png';
  heroTitle: string = 'Registration is closed! See you guys at retreat!!';
  heroText: string = '"...and they will shine like stars in the universe..."';
  retreatVideoUrl: string = 'https://www.youtube.com/embed/tpmpY__38WI';

  retreatNav = [
    {
      href: 'about',
      scroll: true,
      text: 'About the Retreat'
    },
    {
      href: 'faq',
      scroll: true,
      text: 'FAQ'
    },
    {
      href: 'contact',
      scroll: true,
      text: 'contact'
    }
  ];

  theme = 'light';

  faqContent = [
    {
      question: `Who/What Is Radiant?`,
      answer: `Radiant Youth is the Youth Ministry of <a href="http://epicentrechurch.org">Epicentre Church</a>, Pasadena, CA`
    },
    {
      question: `What age students are allowed to register?`,
      answer: `6th-12th graders`
    },
    {
      question: `Will meals be provided?`,
      answer: `8 meals (Sat, Sun: Breakfast, Lunch, Dinner), (Monday: Breakfast and Lunch). EAT DINNER ON YOUR OWN ON FRIDAY...we have snacks throughout`
    },
    {
      question: `What will accommodations be like?`,
      answer: `There will be 12 students per same-gender cabin with 2 youth leaders overseeing each cabin`
    },
    {
      question: `How will students be transported?`,
      answer: `A reputable charter bus company (<a href="https://www.ridemcoach.com/" target="_blank">M COach</a>) will be taking students to and from the camp.`
    },
    {
      question: `What should we pack?`,
      answer: `Toiletries, Sleeping Bag/Pillow, Warm Clothes and shoes, Bible, Notebook, Pen, Flashlight`
    },
    {
      question: `What activities will there be?`,
      answer: `Games, worship, messages, small group times, snow, sports, and more!`
    }
  ];

  constructor(private titleService: Title) {
    titleService.setTitle('Into the Night - Radiant Retreat 2018');
  }

  ngOnInit() {}
}