import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})


export class SkillsComponent implements OnInit, AfterViewInit {
  // to get the height of content
  @ViewChild('content') anyName!: ElementRef
  // to send the height of the content
  @Output() heightSend = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // gets the height of the page
    let pageHeight = this.anyName.nativeElement.clientHeight
    console.log("page content height: " + pageHeight)

    // sends page height to route-animations.ts
    const heightSender = () => this.heightSend.emit(pageHeight)
    heightSender

  }

}

