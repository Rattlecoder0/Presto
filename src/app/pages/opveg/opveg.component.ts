import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-opveg',
  templateUrl: './opveg.component.html',
  styleUrls: ['./opveg.component.css']
})
export class OpvegComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }

  getMenuId:any
  vmenuData:any

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuId,'getmenu')
   if(this.getMenuId){
      this.vmenuData = this.service.VegFoodDetails.filter((value)=>{
           return value.id == this.getMenuId
         })
       }
  }

}
