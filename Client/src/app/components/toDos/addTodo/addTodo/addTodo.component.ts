import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppStateService } from 'src/app/services/stateService.service';
import { TodosUtilsService } from 'src/app/services/todosUtils.service';

@Component({
  selector: 'app-addTodo',
  templateUrl: './addTodo.component.html',
  styleUrls: ['./addTodo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() cancel: EventEmitter<null> = new EventEmitter();

  constructor(private utils: TodosUtilsService, private state: AppStateService) { }
  ngOnInit(): void {
  }
  submitTodo(value: {title: string}) {
    this.utils.addTodo(value.title).then(() => {
      this.cancel.emit();
      this.state.setCheckTodos();
    });
  }
  cancelEvent() {
    this.cancel.emit();
  }
}
