import { Component, OnInit } from '@angular/core';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'child2-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  constructor() {
    console.log('child2-page1')
    console.log(window.location)
   }

   ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => {
        this.singleSpaProps = props;
        console.log(55555)
        console.log(this.singleSpaProps)
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
