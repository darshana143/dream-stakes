import { Component, OnInit } from '@angular/core';
import { ICard } from '../ds-components/ds-types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  cards: ICard[] = [
    {
      icon: './assets/dasboard/home.png',
      title: 'Entries',
      info: '35',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/users.png',
      title: 'Cash Spent',
      info: '$3,435',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/users.png',
      title: 'Successful Invites',
      info: '189',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/settings.png',
      title: 'Bid Placed',
      info: '50',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/send.png',
      title: 'Contracts Won',
      info: '187',
      infoIcon: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
