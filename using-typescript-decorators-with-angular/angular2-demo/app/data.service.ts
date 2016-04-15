import {HEROES} from './mock-heroes';
import {IHero} from './hero';
import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<IHero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000)
        );
    }

    addHero(hero: IHero) {
        HEROES.push(hero);
        return Promise.resolve();
    }
}
