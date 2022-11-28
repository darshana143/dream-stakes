import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.display = false;
    this.displayChange.emit(this.display);
  }

}
