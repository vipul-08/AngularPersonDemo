import { Component, OnInit } from '@angular/core';
import { Person } from '../person-form/person';

@Component({
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor() {}
  personList = [
    new Person("1", "Vipul", "Singh", new Date("01/01/1997"), "vipul.s@media.net", "India", null),
    new Person("2", "Ambuj", "Gupta", new Date("01/01/1997"), "ambuj.g@media.net", "India", null),
    new Person("3", "Adish", "Rao", new Date("01/01/1997"), "adish.r@media.net", "India", null),
    new Person("4", "Abhishek", "Surve", new Date("01/01/1997"), "abhishek.s@media.net", "India", null),
  ]

  // fetch from api

  ngOnInit() {

  }

}
