import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent implements OnInit {
  terzo: string;
  constructor() {
    this.terzo = "terzo"
   }

  ngOnInit(): void {
  }

}
