import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: `form.component.html`,
    styleUrls: ['form.component.css']
})

export class TodoFormComponent {

    newTodoTitle: string = '';

    create(){

    }
}