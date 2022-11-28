import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPopupConfigs, IPopupCpmmands } from '../ds-types';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() display: boolean = false;
  @Input() popupData: IPopupConfigs;
  @Output() notifyParent = new EventEmitter<any>();
  contentLines;

  constructor() { }

  ngOnInit(): void {
    
  }

  close(){
    this.sendCommandToParent(IPopupCpmmands.close);
  }

  sendCommandToParent(command){
    
    switch(command){
      case IPopupCpmmands.close: this.notifyParent.emit({command: IPopupCpmmands.close}); break;
      case IPopupCpmmands.next: this.notifyParent.emit({command: IPopupCpmmands.next}); break;
      case IPopupCpmmands.back: this.notifyParent.emit({command: IPopupCpmmands.back}); break;
    }

  }

}
