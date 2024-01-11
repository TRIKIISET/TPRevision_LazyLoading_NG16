import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-menudirecteur',
  templateUrl: './menudirecteur.component.html',
  styleUrls: ['./menudirecteur.component.css']
})
export class MenudirecteurComponent {
  constructor(private router:Router,
    private loginService:LoginService){}

  onDisconnect(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
