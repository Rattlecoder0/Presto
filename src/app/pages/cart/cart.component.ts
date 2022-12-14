import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/trans/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public Product : any = []
  public grandTotal !: number
  cardlist:any
  price:any
  constructor(private cartsrv:CartService) { }

  ngOnInit(): void {
    this.cartsrv.getProduct().subscribe(res => {
      this.Product = res
      this.grandTotal = this.cartsrv.getTotalPrice()
    })
    this.cardlist=this.cartsrv.cartItemList
    this.price= this.cartsrv.cartItempr
    // console.log(this.cardlist)
  }

  removeitem(item:any){
    this.cartsrv.removeCartitem(item)
  }

  emptycart(){
    this.cartsrv.removeAllCart()
  }

  // removeall(){
  //   this.cartsrv.removeAllCart()
  // }

}
