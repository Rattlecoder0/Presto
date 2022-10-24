import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/trans/cart.service';
import { TransService } from 'src/app/trans/trans.service';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:TransService, private cartserv:CartService) { }


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
    //  console.log(this.getvalue)

    
    })


    //addtocart
    this.service.onGetMenu().subscribe(res => {
      this.itemlist = res
      this.itemlist.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })

  }

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
    this.cartserv.addtoCart(getvalue)
  }


}
