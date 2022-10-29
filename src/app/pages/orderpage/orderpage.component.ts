import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/trans/cart.service';
import { TransService } from 'src/app/trans/trans.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:TransService, private cartserv:CartService, private fb: FormBuilder) { }

  nvmenuData:any
  getvalue:any
  itemlist:any
  serves:any=0

  ngOnInit(): void {
    this.param.params.subscribe((fdata)=>{
      this.nvmenuData = fdata['id']
    })
    console.log(this.nvmenuData)

    this.service.searchmenu(this.nvmenuData).subscribe((data) =>{
      this.getvalue = data
      this.getvalue.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })

  }

  // Radio Form 
  radioForm = this.fb.group({
    ser1: ['serve1']
  })


  // Show Prices
  show(val:any){
    if(val == 's1'){
      this.serves = this.getvalue[0].s1
    }
    else if(val == 's2'){
      this.serves = this.getvalue[0].s2
    }
    else if(val == 's3'){
      this.serves = this.getvalue[0].s3
    }
    else if(val == 's4'){
      this.serves = this.getvalue[0].s4
    }
  
  }

  addtocart(getvalue:any){
    console.log(this.radioForm.value)
    this.cartserv.addtoCart(getvalue,this.radioForm.value)
    alert('Added To Cart')
  }


}
