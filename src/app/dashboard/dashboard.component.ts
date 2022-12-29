import { Component, OnInit } from '@angular/core';
import { IPopupConfigs, IPopupCpmmands } from '../ds-components/ds-types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  placeBid: boolean = false;
  currentPopopWindowIdx: number = 0;
  popupData: IPopupConfigs[];
  currentPopupPage: IPopupConfigs;

  cards: ICard[] = [
    {
      icon: './assets/dasboard/home.png',
      title: 'Auction Houses',
      info: '35',
      infoIcon: './assets/dasboard/info.png'
    },
    {
      icon: './assets/dasboard/users.png',
      title: 'Online Users',
      info: '13,986',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/settings.png',
      title: 'Last Winnig Bid',
      info: '$4,564',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/timer.png',
      title: 'Ending Soon',
      info: '187',
      infoIcon: ''
    }
  ]

  houses = [
    {
      label: 'Auction House 1',
      value: {
        id: 1,
        name: 'Auction House 1'
      }
    },
    {
      label: 'Auction House 2',
      value: {
        id: 2,
        name: 'Auction House 2'
      }
    }
  ]

  selectedHouse;

  constructor() { }

  ngOnInit(): void {

    this.popupData = [
      {
        header: 'Place Bid',
        contentHeader: '',
        content: ``,
        bckButton: false,
        nxtButton: false,
        customContents: 'placeBid',
        showFooter: false
      },
      {
        header: 'Place Bid',
        contentHeader: '',
        content: `
          <div style="width: 100%; text-align: center;">

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 700; font-size: 32px; line-height: 28px; color: #2C2C2C; margin-bottom: 15px;">
                Heffel Fine Art Auction House
            </div>

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 600; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 20px;">
                Duplex Auction House
            </div>

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 400; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 40px;">
                Current Bid : $4575
            </div>

          </div>

          <div style="width: 100%; height: 0px; border: 1px solid rgba(44, 44, 44, 0.2); margin-bottom: 56px;"></div>

          <div style="width: 100%;display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 42px;
                line-height: 28px;
                color: #F9A369;
            ">
                Success
            </label>

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
                text-align: justify;
                color: #2C2C2C;
                margin-top: 21px;
            ">
                Your Bid for $4800 is now live
            </label>

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 28px;
                text-align: justify;
                color: #2C2C2C;
                margin-top: 80px;
            ">
                Share Your Ask
            </label>

            <div style="display: flex; flex-direction: row; justify-content: space-between; width: 267px; height: 48px; margin-top: 35px;">

              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/fb.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/twitter.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/pinterest.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/google_plus.png">
  
            </div>

          </div>

        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true,
        customFooterButton: 'finish'
      }
    ]

    this.currentPopupPage = this.popupData[0];
    this.selectedHouse = this.houses[0].value;

  }

  showPlaceBid(){

    this.placeBid = true;

  }

  setRoom(){
    console.log(this.selectedHouse)
  }

  recieveFromPopupDialog(e){
    
    switch(e.command){

      case IPopupCpmmands.close:
 
        this.currentPopopWindowIdx = 0;
        this.placeBid = false; 

      break;
      case IPopupCpmmands.reviewBid: this.currentPopopWindowIdx++; break;

    }

    this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];

    

  }

}

interface ICard {
  icon: string,
  title: string,
  info: string,
  infoIcon: string
}
