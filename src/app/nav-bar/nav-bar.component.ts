import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private adalSvc: MsAdalAngular6Service, private router: Router) { }

  ngOnInit() {
  }



  logout() {
    this.adalSvc.logout();
    this.router.navigate(['/']);
  }

  onClick(logoutEvent: Event): void {
    this.logout();
  }

}
