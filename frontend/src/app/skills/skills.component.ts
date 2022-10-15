import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

@Injectable({
  providedIn: "root"
})
export class SkillsComponent implements OnInit, AfterViewInit {
  // to get the height of content
  @ViewChild('content') anyName!: ElementRef

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // gets the height of the page
    let pageHeight = this.anyName.nativeElement.clientHeight
    console.log("page content height: " + pageHeight)
    return pageHeight
  }
  // console.log(ngAfterViewInit: any)

}

