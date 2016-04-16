import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DataService} from './data.service';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, DataService]
})
@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent,
        useAsDefault: true
    },
    {
        path: '/heroes/add',
        name: 'HeroesAdd',
        component: HeroDetailComponent
    }
])
export class AppComponent {
    title: string = 'Captain America: Civil War';
}
