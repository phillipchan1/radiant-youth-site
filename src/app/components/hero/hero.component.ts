import { Component, Input } from '@angular/core';

@Component({
	selector: 'hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
	@Input() content: string;
	@Input() videoBackgroundUrl: string;
	@Input() title: string;
	@Input() imageUrl: string;


	constructor() { }

}
