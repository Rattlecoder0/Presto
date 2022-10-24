import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { TransService } from 'src/app/trans/trans.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  confirmpass: string = 'none'
 
  constructor(private http : HttpClient, private router:Router, private trans:TransService) { }


  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    firstname: new FormControl("", 
    [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),

    lastname: new FormControl("", 
    [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),

    mobile: new FormControl("",
    [Validators.required,Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),

    email: new FormControl("",
    [Validators.required, Validators.email]),

    password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),

    confirmpassword: new FormControl("")
  }
  )

  get FirstName(): FormControl{
    return this.registerForm.get("firstname") as FormControl
  }
  get LastName(): FormControl{
    return this.registerForm.get("lastname") as FormControl
  }
  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl
  } 
  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl
  }
  get Password(): FormControl{
    return this.registerForm.get("password") as FormControl
  }
  get ConfirmPassword(): FormControl{
    return this.registerForm.get("confirmpassword") as FormControl
  }




  signUp(){
    if(this.Password.value == this.ConfirmPassword.value){
      //Json Server
    //   this.http.post<any>("http://localhost:3000/signupUsers",this.registerForm.value)
    //   .subscribe(res=>{
    //     alert("Signup Successfull");
    //     this.registerForm.reset();
    //     this.router.navigate(['login'])
    //   },err=>{
    //     alert("Something went wrong")
    //   })
    //   this.confirmpass = 'none'
    // }

      // mongodb
      this.trans.addUserDetails(this.registerForm.value).subscribe((user)=>{
        console.log(user)
        alert("Signup Successfull");
        this.registerForm.reset();
        this.router.navigate(['login'])
      },err=>{
          alert("Something went wrong")
        })
      this.confirmpass = 'none'

    }
    else{
      this.confirmpass = "inline"
    }

    

  }




}
