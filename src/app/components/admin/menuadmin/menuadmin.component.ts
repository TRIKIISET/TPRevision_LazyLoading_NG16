import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuadminComponent {

  constructor(private router:Router,
    private loginService:LoginService){}

  onDisconnect(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
