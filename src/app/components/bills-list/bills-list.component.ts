import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
    selector: 'app-bills-list',
    standalone: true,
    templateUrl: './bills-list.component.html',
    styleUrl: './bills-list.component.css',
    imports: [ListItemComponent]
})
export class BillsListComponent implements OnInit{

  bills!: any[];

  ngOnInit() {

    this.bills = [
      {
        id: 1,
        titulo: 'Electricity',
        descripcion: 'Electricity',
        precio: 100,
        fecha: '2021-01-01',
        estado: 'Completado'
      },
      {
        id: 2,
        titulo: 'Water',
        descripcion: 'Water',
        precio: 50,
        fecha: '2021-01-01',
        estado: 'Completado'
      },
      {
        id: 3,
        titulo: 'Internet',
        descripcion: 'Internet',
        precio: 150,
        fecha: '2021-01-01',
        estado: 'Completado'
      },
      {
        id: 4,
        titulo: 'Gas',
        descripcion: 'Gas',
        precio: 200,
        fecha: '2021-01-01',
        estado: 'Completado'
      }
    ];


  }

  

}
