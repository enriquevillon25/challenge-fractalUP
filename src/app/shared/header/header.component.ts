import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // faCoffee = faCoffee;
  name : FormControl;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { 
    this.name= new FormControl('');
  }
  ngOnInit(): void {
    
  }
  sendSearch(item:any){
    this.newItemEvent.emit(item);
    console.log(item);
  }
  addNewItem(value: string) {
    
  }
}
