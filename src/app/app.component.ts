import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  mouseIsOverH2 = false;

  title = 'Angular8-Udemy-Tutorial';
  myNotes = ["Laundry", "Dishes", "Dishes"];

  mouseOver() {
    this.mouseIsOverH2 = true;
  }
}
