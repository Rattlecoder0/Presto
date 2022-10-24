import { Component, OnInit } from '@angular/core';
import { TransService } from 'src/app/trans/trans.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:TransService) { }

  nonveg:any=[]
  veg:any=[]

  Mdata:any 
  ngOnInit(): void {
    this.service.onGetMenu().subscribe((res)=>{
      this.Mdata = res

      for(let data of this.Mdata){
        if(data.type=='nonveg'){
          this.nonveg.push(data)
        }
        else{
          this.veg.push(data)
        }
      }
    })


  }





}
