import {Injectable} from 'angular2/core';

@Injectable()
export class DataService {
  getContent() {
    return 'Hello from the data service!';
  }
}
