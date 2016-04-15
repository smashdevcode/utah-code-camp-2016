
# Angular 2 Demo App Walkthrough

## AppComponent

```
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
```

## DataService

```
@Injectable()
```

## HeroesComponent

```
@Component({
    templateUrl: 'app/heroes.component.html'
})
```

## HeroDetailComponent

```
@Component({
    templateUrl: 'app/hero-detail.component.html'    
})
```
