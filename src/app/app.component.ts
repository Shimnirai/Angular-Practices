import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  names = 'Angular Practices';

  lists = [{name: 'sarath', age: 26, gender: 'Male'},
  {name: 'reshma', age: 28, gender: 'Female'},
  {name: 'yazhini', age: 25, gender: 'Female'},
  {name: 'Sanjana', age: 30, gender: 'Male'},
  {name: 'arun', age: 20, gender: 'Male'},
  {name: 'ajay', age: 22, gender: 'Male'}]
}
