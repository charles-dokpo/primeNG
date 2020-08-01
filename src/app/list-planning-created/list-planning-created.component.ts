import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-planning-created',
  templateUrl: './list-planning-created.component.html',
  styleUrls: ['./list-planning-created.component.css']
})
export class ListPlanningCreatedComponent implements OnInit {
  cols: { field: string; header: string; }[];
  brands: { label: string; value: string; }[];
  cars: { vin: string; brand: string; year: number; color: string; price: number; }[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'vin', header: 'Vin'},
      { field: 'brand', header: 'Brand' },
  ];

  this.brands = [
    { label: 'All Brands', value: null },
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
];

this.cars=[
  {"vin":"a1653d4d","brand":"VW","year":1998,"color":"White","price":10000},
  {"vin":"ddeb9b10","brand":"Mercedes","year":1985,"color":"Green","price":25000},
  {"vin":"d8ebe413","brand":"Jaguar","year":1979,"color":"Silver","price":30000},
  {"vin":"aab227b7","brand":"Audi","year":1970,"color":"Black","price":12000},
  {"vin":"631f7412","brand":"Volvo","year":1992,"color":"Red","price":15500},
  {"vin":"7d2d22b0","brand":"VW","year":1993,"color":"Maroon","price":40000},
  {"vin":"50e900ca","brand":"Fiat","year":1964,"color":"Blue","price":25000},
  {"vin":"4bbcd603","brand":"Renault","year":1983,"color":"Maroon","price":22000},
  {"vin":"ead9bf1d","brand":"Fiat","year":1968,"color":"Maroon","price":43000},
  {"vin":"bc58113e","brand":"Renault","year":1981,"color":"Silver","price":36000},
  {"vin":"2989d5b1","brand":"Honda","year":2006,"color":"Blue","price":240000},
  {"vin":"c243e3a0","brand":"Fiat","year":1990,"color":"Maroon","price":15000},
  {"vin":"e3d3ebf3","brand":"Audi","year":1996,"color":"White","price":28000},
  {"vin":"45337e7a","brand":"Mercedes","year":1982,"color":"Blue","price":14000},
  {"vin":"36e9cf7e","brand":"Fiat","year":2000,"color":"Orange","price":26000},
  {"vin":"036bf135","brand":"Mercedes","year":1973,"color":"Black","price":22000},
  {"vin":"ad612e9f","brand":"Mercedes","year":1975,"color":"Red","price":45000},
  {"vin":"97c6e1e9","brand":"Volvo","year":1967,"color":"Green","price":42000},
  {"vin":"ae962274","brand":"Volvo","year":1982,"color":"Red","price":36000},
];

}



}
