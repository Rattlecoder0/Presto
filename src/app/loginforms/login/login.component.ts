import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      firstname:['',Validators.required],  
      password:['',Validators.required]
    })
  }

 
  login(val:any){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res => {
      // this.http.get<any>("http://localhost:3000/getData").subscribe(res => {
      const user = res.find((a:any)=>{
        return a.firstname === this.loginForm.value.firstname && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login Successfull")
        this.loginForm.reset()
        // window.location.reload()
        this.router.navigate(['/'])
        
      }else{
        alert("User Not Found!")
      }
    },err=>{
      alert("Something Went Wrong")
    })

   localStorage.setItem('nam',val)

  }


}
