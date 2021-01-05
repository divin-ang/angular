import {Component, OnInit,ElementRef} from '@angular/core';
import { TodoService } from '../todo.service';

import { TodoItemData } from '../dataTypes/TodoItemData';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  private theItem :TodoItemData;
  private inputLabel: ElementRef;
  get getLabel(): string {
    return this.theItem.label;
  }

  set setLabel(lab: string) {
    this.todoService.setItemsLabel(lab, this.theItem);
  }
  private EnEdition = false;
  constructor( private todoService: TodoService) { }
  get getEdition(): boolean {
    return this.EnEdition;
  }

  set setEdition(editionArg: boolean) {
    this.EnEdition= editionArg;
    requestAnimationFrame(() => this.inputLabel.nativeElement.focus());
  }

  ngOnInit() {
  }
  get label(): string {
    return this.theItem.label;
  }

  set label(labelArg: string) {
    this.todoService.setItemsLabel(labelArg, this.theItem);
  }
  setItemsDone(item: TodoItemData, done: boolean) {
    this.todoService.setItemsDone(done, item);
  }

  removeItems() {
    this.todoService.removeItems(this.theItem);
  }
  


}
