import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
  }

}

interface ICard {
  icon: string,
  title: string,
  info: string,
  infoIcon: string
}
