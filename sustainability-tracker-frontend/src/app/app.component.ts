import { Component } from '@angular/core';
import { ActionListComponent } from './components/action-list/action-list.component';
import { AddActionComponent } from './components/add-action/add-action.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ActionListComponent, AddActionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sustainability Tracker';
}