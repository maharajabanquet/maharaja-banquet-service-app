import { Component, OnInit, inject } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPagePage implements OnInit {
  public item!: Message;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  userSelectedItem: any;  
  constructor() { 
   
    
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.item = this.data.getMessageById(parseInt(id, 10));
    console.log(this.item);
  }

  getQuantityRange(range: any) {
    return [...Array(range).keys()]; + 1
  }

  onItemSelect(qnt: any, item: any , idx: any) {
    // if(this.item.categoryList)
    this.item.categoryList[idx].orderQuant = qnt.target.value;
    console.log(this.item);
    
          
    // console.log(qnt.target.value);
    
    
  }
}
