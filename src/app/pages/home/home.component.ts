import { Component, OnInit } from '@angular/core';
import { TransService } from 'src/app/trans/trans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:TransService) { }

  nonveg:any=[]
  veg:any=[]
  sm:any=true
  Mndata:any 

  ngOnInit(): void {
    this.service.onGetMenu().subscribe((res)=>{
      this.Mndata = res
      for(let data of this.Mndata){
        if(data.type=='nonveg'){
          this.nonveg.push(data)
        }
        else{
          this.veg.push(data)
        }
      }
    })

  }

  showmore(){
    this.sm =! this.sm
  }

}
