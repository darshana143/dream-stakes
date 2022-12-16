import { Component, OnInit } from '@angular/core';
import { Interconnect, IMessageStream } from 'ng-interconnect';
import { MainViews } from 'src/app/app.types';

@Component({
  selector: 'app-left-panal',
  templateUrl: './left-panal.component.html',
  styleUrls: ['./left-panal.component.scss']
})
export class LeftPanalComponent implements OnInit {

  private changeView: IMessageStream | Promise<IMessageStream>;
  _MainViews = MainViews;

  constructor(private interconnect: Interconnect) {

    this.changeView = interconnect.connectToListener('home/changeView', 'leftbar');
    if (this.changeView['then']) {
      this.changeView['then']((notifier) => this.changeView = notifier);
    }

  }

  ngOnInit(): void {
  }

  userChangeView(viewId){
    (this.changeView as IMessageStream).emit({mainView: viewId});
  }

}
