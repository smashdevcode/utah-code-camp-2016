import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DataService} from './data.service';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

export class AppComponent {
    title: string = 'Captain America: Civil War';
}
