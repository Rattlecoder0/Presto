import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public cartItempr : any = []
  public productList = new BehaviorSubject<any>([])

  constructor() { }

  getProduct(){
   return this.productList.asObservable()
  }
 
 setProduct(product : any){
  this.cartItemList.push(...product)
  this.productList.next(product)
 }

 addtoCart(product:any,price:any){
  this.cartItempr.push(price.ser1)
  this.cartItemList.push(product)
  this.productList.next(this.cartItemList)
  this.getTotalPrice()
  // console.log(this.cartItemList,price)
  console.log(this.cartItemList,this.cartItempr)

 }

 getTotalPrice() : number{
  let grandTotal = 0
  this.cartItemList.map((a:any) => {
    grandTotal += a.ser1
  })
  return grandTotal
 }

 removeCartitem(product:any){
  this.cartItemList.map((a:any, index:any) => {
    if(product.id===a.id){
      this.cartItemList.splice(index,1)
    }
  })
  this.productList.next(this.cartItemList)
 }

 removeAllCart(){
  this.cartItemList = []
  this.cartItempr = []
  this.productList.next(this.cartItemList)
  this.productList.next(this.cartItempr)
 }


}
