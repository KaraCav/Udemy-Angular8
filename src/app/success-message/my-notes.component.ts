import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  @Input() singleNote: string;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  

}
