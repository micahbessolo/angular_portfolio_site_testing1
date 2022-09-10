import {
   trigger,
   transition,
   style,
   query,
   group,
   animateChild,
   animate,
   keyframes
 } from '@angular/animations';

export const slider =
 trigger('routeAnimations', [
  transition('* => 0', slideTo('top') ),
  transition('* => 3', slideTo('bottom') ),
  transition('3 => *', slideTo('top') ),
  transition('0 => *', slideTo('bottom') ),
  transition('1 => 2', slideTo('bottom') ),
  transition('2 => 1', slideTo('top') )
 ]);

function slideTo(direction: string){
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        left: 0,
        [direction]: 0,
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ opacity: 0, transform: 'scale(1) translateY(0)' }))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}
