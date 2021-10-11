import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.css'],
})
export class MedicationDetailsComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['10001', '10002', '10003'];
  filteredOptions: Observable<string[]> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
