import { Component, OnInit } from '@angular/core';
import { ISliderConfig } from 'src/app/ds-components/ds-types';

@Component({
  selector: 'app-enter-screen',
  templateUrl: './enter-screen.component.html',
  styleUrls: ['./enter-screen.component.scss']
})
export class EnterScreenComponent implements OnInit {

  sliderData: ISliderConfig[];
  showDialogUI: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.sliderData = [
      {
        header: "Header 1",
        content: "Content 1",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        }
      },
      {
        header: "Welcome to",
        header2: 'Our Auction Center',
        content: "This is where Auction Houses are posted by our administration team. When one room closes another one opens for our multi-room Houses. When a room is ready to close, it means that the room is full and the timer will be activated to conclude the bidding session. Any addtional rooms will open automatically with a 21 day timer until it conculdes.",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        },
        default: true
      },
      {
        header: "Header 3",
        content: "Content 3.",
        dotPeref: {
          color: 'rgba(237, 166, 115, 0.5)',
          defaultColor: 'rgba(237, 166, 115, 0.5)'
        }
      }
    ]
  }

  showDialog(){
    this.showDialogUI = true;
  }

}
