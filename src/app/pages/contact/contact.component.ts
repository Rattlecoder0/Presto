import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public contactForm !: FormGroup

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      number:['',Validators.required],
      issue:['',Validators.required]
    })
  }

}
