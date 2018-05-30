import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private adalSvc: MsAdalAngular6Service) {
    console.log(adalSvc.isAuthenticated);
    console.log(this.adalSvc.userInfo);
    /*const token = this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token2: string) => {
      console.log(token2);
    });*/
  }
}
