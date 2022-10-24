import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private http:HttpClient) { }

  signupData = 'http://localhost:3000/getData'
  menuData = 'http://localhost:3000/getmenuData'

  onGetData(){
    return this.http.get('http://localhost:3000/getData')
  }

  // Post Api

  addUserDetails(formData:any){
    return this.http.post('http://localhost:3000/addData',formData)
  }

  // Delete Api

  deleteurl = 'http://localhost:3000/deleteData'
  deleteUserDetails(id:any){
    return this.http.delete(`${this.deleteurl}/${id}`)
  }


  // Put Api -- update
  updateurl = 'http://localhost:3000/updateData'
  updateDetails(formData:any,id:any){
    return this.http.put(`${this.updateurl}/${id}`,formData)
  }

// Menu Data

onGetMenu(){
  return this.http.get('http://localhost:3000/menu/getmenudata')
}

searchmenu(id:any){
  return this.http.get(`http://localhost:3000/menuRout/${id}`)
}

}
