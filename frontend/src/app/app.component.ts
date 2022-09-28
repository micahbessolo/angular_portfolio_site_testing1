import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

import { RouterOutlet } from '@angular/router';

import { slider } from './route-animations'
import { LoaderService } from './loader/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // for sidenav
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  // measures sidebar
  @ViewChild('sidebar') anyName!: ElementRef

  constructor(private observer: BreakpointObserver,
    public loaderService: LoaderService) {  }

  ngAfterViewInit(): void {

    this.observer.observe(['(max-width: 800px)']).subscribe((res)=> {
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    console.log(this.anyName.nativeElement.clientHeight)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
