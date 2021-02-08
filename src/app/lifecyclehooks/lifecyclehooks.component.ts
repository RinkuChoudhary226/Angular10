import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit {

  constructor() { }

  ngOnInit(){
     console.log("ngOnInit called!..");
  }
  ngOnChanges() {
    console.log("ngOnChanges called!...");
  }
  ngAfterViewInit() {
    console.log('AfterViewInit called!....');
  }
  ngOnDestroy()
  {
    console.log("ngOnDestroy called!....");
  }
}
