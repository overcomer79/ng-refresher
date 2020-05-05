import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  enteredPersonName: string;

  constructor(private prsService: PersonsService) {}
  ngOnInit(): void {
    this.enteredPersonName = '';
  }

  onCreatePerson() {
    this.prsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
