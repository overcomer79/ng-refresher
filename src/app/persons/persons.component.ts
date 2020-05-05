import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  private personListSubs: Subscription;
  isFetching = false;
  personList: string[];

  constructor(private prsService: PersonsService) {}

  ngOnInit(): void {
    this.personListSubs = this.prsService.personChanged.subscribe( person => {
      this.personList = person;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }

}
