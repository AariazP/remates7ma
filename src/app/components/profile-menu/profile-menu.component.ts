import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css'
})
export class ProfileMenuComponent implements OnInit {

  userLogo!: string;


  ngOnInit() {
    this.userLogo = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  }
}
