import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.css'],
  animations: [
    trigger('focusPanel', [
      state(
        'inactive',
        style({
          opacity: 1,
          backgroundColor: '#ffffcc'
        })
      ),
      state(
        'active',
        style({
          opacity: 0,
          backgroundColor: '#0bc'
        })
      ),
      transition('inactive => active', animate('450ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ]),
    trigger('animationToggle', [
      transition('show => hide', [style({ transform: 'translateX(-100%)' }), animate(350)]),
      transition('hide => show', animate('3000ms'))
    ]),
    trigger('animationState', [
      state('frameTest1', style({ transform: 'translate3d(0, 0, 0)' })),
      state('frameTest2', style({ transform: 'translate3d(300px, 0, 0)' })),
      transition('frameTest1 => frameTest2', animate('300ms ease-in-out')),

      transition('frameTest2 => frameTest1', [
        animate(
          1000,
          keyframes([
            style({ opacity: 1, transform: 'rotate(180deg)', offset: 0.3 }),
            style({ opacity: 1, transform: 'rotate(-90deg)', offset: 0.7 }),
            style({ opacity: 0, transform: 'rotate(-180deg)', offset: 1.0 })
          ])
        )
      ])
    ]),
    trigger('toggleMenu', [
      state(
        'opened',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'closed',
        style({
          transform: 'translate3d(100%, 0, 0)'
        })
      ),
      transition('opened => closed', animate('400ms ease-in-out')),
      transition('closed => opened', animate('400ms ease-in-out'))
    ])
  ]
})
export class AngularAnimationsComponent implements OnInit {
  state: string = 'inactive';
  menuState: string = 'opened';

  public left: string = 'frameTest1';
  public contentDiv: string = 'show';

  constructor() {}

  ngOnInit(): void {}

  public onClick(): void {
    this.left = this.left === 'frameTest1' ? 'frameTest2' : 'frameTest1';
  }

  public showHideDiv(): void {
    this.contentDiv = this.contentDiv === 'show' ? 'hide' : 'show';
  }

  toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'opened' : 'closed';
  }

  toggleBackground() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

}
