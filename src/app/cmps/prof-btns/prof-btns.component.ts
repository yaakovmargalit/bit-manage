import { copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prof-btns',
  templateUrl: './prof-btns.component.html',
  styleUrls: ['./prof-btns.component.scss']
})
export class ProfBtnsComponent implements OnInit {
  constructor() { }
  profBtns=[
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"העברה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"סריקה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"בקשה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"בקשה בסריקה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"יצירת קבוצה"
    },
  ]

  btnsForUse=[
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"העברה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"סריקה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"בקשה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"בקשה בסריקה"
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqJyK8b4JV7fPs3xYvH84kgmkYeRbqckS6g&usqp=CAU',
      text:"יצירת קבוצה"
    },
  ]
  ngOnInit(): void {
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
