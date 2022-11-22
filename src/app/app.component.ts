import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [
    'Nouméa',
    'Belep',
    'Boulouparis',
    'Bourail',
    'Canala',
    'Dumbéa',
    'Farino',
    'Hienghène',
    'Houaïlou',
    'Île des Pins',
    'Kaala-Gomen',
    'Kouaoua',
    'Koné',
    'Koumac',
    'La Foa',
    'Lifou',
    'Maré',
    'Moindou',
    'Mont-Dore',
    'Ouégoa',
    'Ouvéa',
    'Païta',
    'Poindimié',
    'Ponérihouen',
    'Pouembout',
    'Pouébo',
    'Poum',
    'Poya',
    'Sarraméa',
    'Thio',
    'Touho',
    'Voh',
    'Yaté',
  ];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    console.log(this.filteredOptions);

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
