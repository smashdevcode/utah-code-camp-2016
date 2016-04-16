import {Component} from 'angular2/core';
import {DataService} from './data.service';

@Component({
  selector: 'app',
  template: `
    <h1>{{ content }}</h1>
    <p>And here would go more content.</p>
  `,
  providers: [DataService]
})
export class AppComponent {
  content: string;

  constructor(private _dataService: DataService) {
    this.content = _dataService.getContent();
  }
}
