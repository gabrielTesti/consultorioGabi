import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  

  constructor(private authservice: AuthService) {}


  ngOnInit(): void {
    this.login(); 
  }

  login(): void {    
    this.authservice.login();
  }

}
