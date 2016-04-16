import {Component, OnInit} from 'angular2/core';

import {IHero} from './hero';
import {DataService} from './data.service';

@Component({
    templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit {
    blueHeroes: IHero[];
    redHeroes: IHero[];

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this._dataService.getHeroes().then(heroes => {
            this.blueHeroes = heroes.filter(hero => hero.team === 'Blue');
            this.redHeroes = heroes.filter(hero => hero.team === 'Red');
        });
    }
}
