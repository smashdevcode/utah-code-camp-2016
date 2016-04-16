import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {IHero} from './hero';
import {DataService} from './data.service';

export class HeroDetailComponent {
    hero: IHero;

    constructor(
            private _router: Router,
            private _dataService: DataService) {
        this.hero = {
            name: '',
            team: 'Blue'
        };
    }

    addHero() {
        return this._dataService.addHero(this.hero)
            .then(() => {
                this._router.navigate(['Heroes']);
            });
    }
}
