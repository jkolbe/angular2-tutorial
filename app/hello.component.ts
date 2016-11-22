import { Component } from '@angular/core';
@Component({
  selector: 'hello',
  template: '<p>hello there {{message}}</p>'
})
export class HelloComponent { 
	message: string = "Joanna";
}