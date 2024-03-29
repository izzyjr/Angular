import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@gmail.com', 65000, new Date(2012, 6, 23)),
    new SalesPerson('John', 'Doe', 'john.doe@gmail.com', 40000, new Date(2021, 8, 12)),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@gmail.com', 60000, new Date(2018, 3, 27)),
    new SalesPerson('Mai', 'Truong', 'mai.truong@gmail.com', 80000, new Date(2015, 9, 19)),
  ];

  constructor() { }

  ngOnInit() {
  }

}
