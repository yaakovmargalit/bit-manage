import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'phone-demo-prof',
  templateUrl: './phone-demo-prof.component.html',
  styleUrls: ['./phone-demo-prof.component.scss']
})
export class PhoneDemoProfComponent implements OnInit {
@Input() profBtns:any

  constructor() { }
  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.profBtns, event.previousIndex, event.currentIndex);
  }

}
