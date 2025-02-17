import { Component, OnInit } from '@angular/core';
import { SustainabilityService, SustainabilityAction } from '../../services/sustainability.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css'],
})
export class ActionListComponent implements OnInit {
  actions: SustainabilityAction[] = [];

  constructor(private sustainabilityService: SustainabilityService) {}

  ngOnInit(): void {
    this.fetchActions();
  }

  fetchActions(): void {
    this.sustainabilityService.getActions().subscribe(
      (data) => {
        this.actions = data;
      },
      (error) => {
        console.error('Error fetching actions:', error);
      }
    );
  }
}