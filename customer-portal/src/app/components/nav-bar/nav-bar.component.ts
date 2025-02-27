import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn=false;

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginservice.isLoggedIn()
  }
  
  logoutUser()
  {
    this.loginservice.logout()
    location.reload()
  }

}
