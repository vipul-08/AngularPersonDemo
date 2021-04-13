import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {

  person: Person = new Person();

  add() {
    console.log(this.person.firstName, this.person.lastName, this.person.email, this.person.country, this.person.dob, this.person.avatar);
    // send to db
    this.person = new Person();
  }

  ngOnInit() {

  }

}
