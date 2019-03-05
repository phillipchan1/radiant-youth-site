import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    siteNav = [
        {
            href: 'hero',
            scroll: true,
            text: 'Home',
        },
        {
            href: 'connect',
            scroll: true,
            text: 'connect',
        },
        {
            href: 'calendar',
            scroll: true,
            text: 'calendar',
        },
        {
            href: 'about',
            scroll: true,
            text: 'Who we are',
        },
        {
            href: 'contact',
            scroll: true,
            text: 'contact',
        },
        {
            href: '/worship',
            scroll: false,
            text: 'Worship',
        },
        // {
        //   href: "/retreat",
        //   scroll: false,
        //   text: "Retreat"
        // }
    ]

    constructor() {}

    ngOnInit() {}
}
