import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  submited = false;
  count = Array(5).fill(0);
  selectedValue: number | null = null;

  selectRating(index: number): void {
    this.selectedValue = index + 1;
  }

  submitRate() {
    if (this.selectedValue) {
      this.submited = true;
    }
    return
  }
}
