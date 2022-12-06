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

  close(customClose){
    this.sendCommandToParent(IPopupCpmmands.close, customClose);
  }

  sendCommandToParent(command, customCommand = false){
    
    switch(command){
      case IPopupCpmmands.close: this.notifyParent.emit({command: IPopupCpmmands.close, customCommand: 'closeTearms'}); break;
      case IPopupCpmmands.next: this.notifyParent.emit({command: IPopupCpmmands.next}); break;
      case IPopupCpmmands.back: this.notifyParent.emit({command: IPopupCpmmands.back}); break;
      case IPopupCpmmands.showTearms: this.notifyParent.emit({command: IPopupCpmmands.showTearms}); break;
      case IPopupCpmmands.showPrivacyPolicy: this.notifyParent.emit({command: IPopupCpmmands.showPrivacyPolicy, customCommand: 'closePrivacyPolicy'}); break;
    }

  }

}
