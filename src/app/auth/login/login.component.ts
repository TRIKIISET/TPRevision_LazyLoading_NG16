import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginForm!:FormGroup;
message:string="";
constructor(private fb:FormBuilder,
  private loginService:LoginService,
  private router:Router){}

  ngOnInit(): void {
      this.loginForm = this.fb.nonNullable.group({
        username:['', Validators.required],
        pwd:['', Validators.required]
      })
  }

  public get Username(){
    return this.loginForm.get('username');
  }

  public get Pwd(){
    return this.loginForm.get('pwd');
  }
  authentifier(){
    const {username, pwd}= this.loginForm.value; 
    this.loginService.login(username, pwd).subscribe(
      users=> {
        if(users.length ==0){
          this.message = "Login ou mot de passe incorrect";
          localStorage.setItem('role', 'none');
        }  
          else {
            let role = users[0].role;
            if( role == 'Admin')
              this.router.navigate(["/admin"]);
            else
              this.router.navigate(["/directeur"]);
            localStorage.setItem('role', role);
            this.message=""
          }          
      }
    )    
  }

}
