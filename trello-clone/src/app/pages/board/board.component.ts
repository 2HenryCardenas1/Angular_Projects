import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Column, ToDo } from 'src/app/models/todo.model';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes',
        },
        {
          id: '2',
          title: 'Buy a unicorn',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }
}
