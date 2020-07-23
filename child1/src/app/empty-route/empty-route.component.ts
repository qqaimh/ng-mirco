import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'child1-empty-route',
  template: '',
})
export class EmptyRouteComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(4444)

      console.log(params)
    })
  }
}
