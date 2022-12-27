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
    }
  ]

  selectedHouse = 'Auction House 1'

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
        header: 'Terms and conditions',
        contentHeader: 'Terms and conditions ',
        content: `These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Dreamstakes.com accessible at www.dreamstakes.com.<br><br>
        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.<br><br>
        Minors or people below 18 years old are not allowed to use this Website.<br><br>
        Your Privacy<br>
        Please read Privacy Policy.<br><br>
        No warranties<br>
        This Website is provided "as is," with all faults, and Dream stakes express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.<br><br>
        Limitation of liability<br>
        In no event shall Dream stakes, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Dream stakes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.<br><br>
        Indemnification<br>
        You hereby indemnify to the fullest extent Dream stakes from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.<br><br>
        Severability<br>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.<br><br>
        Variation of Terms<br>
        Dream stakes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.<br><br>
        Assignment<br>
        The Dream stakes is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.<br><br>
        Entire Agreement<br>
        These Terms constitute the entire agreement between Dream stakes and you in relation to your use of this Website, and supersede all prior agreements and understandings.<br><br>
        Governing Law & Jurisdiction<br>
        These Terms will be governed by and interpreted in accordance with the laws of the State of af, and you submit to the non-exclusive jurisdiction of the state and federal courts located in af for the resolution of any disputes.
        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true
      }
    ]

    this.currentPopupPage = this.popupData[0];

  }

  showPlaceBid(){

    this.placeBid = true;

  }

  recieveFromPopupDialog(e){
    
    switch(e.command){

      case IPopupCpmmands.close:
 
        this.currentPopopWindowIdx = 0;
        this.placeBid = false; 

      break;
      case IPopupCpmmands.next: this.currentPopopWindowIdx++; break;

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
