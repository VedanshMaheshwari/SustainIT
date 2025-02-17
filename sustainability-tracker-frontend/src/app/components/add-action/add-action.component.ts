import { Component } from '@angular/core';
import { SustainabilityService, SustainabilityAction } from '../../services/sustainability.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-action',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-action.component.html',
  styleUrls: ['./add-action.component.css'],
})
export class AddActionComponent {
  newAction = {
    action: '',
    date: '',
    points: 0,
  };

  constructor(private sustainabilityService: SustainabilityService) {}

  onSubmit(): void {
    console.log('Form data being sent:', this.newAction); // Debug: Check the payload
    this.sustainabilityService.addAction(this.newAction).subscribe(
      (response) => {
        alert('Action added successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error adding action:', error); // Debug: Check the error
      }
    );
  }

  resetForm(): void {
    this.newAction = {
      action: '',
      date: '',
      points: 0,
    };
  }
}