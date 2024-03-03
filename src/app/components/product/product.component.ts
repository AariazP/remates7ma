import { Component, input } from '@angular/core';
import { TittleModuleComponent } from "../title-module/title-module.component";
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [TittleModuleComponent, DataTablesModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'

})



export class ProductComponent {

  constructor() {
  }

  ngOnInit(): void {
    this.initDataTable();
  }


  async initDataTable () {

    let dataTable;
    let dataTableIsInitialized = false;

    const dataTableOptions = {
      scrollx:"2000px",
      columnsDefs: [
        {className: "centered", targets: [0, 1, 2, 3, 4, 5 ,6]},
        {orderable: false, targets: [5, 6]},
        {searchable: true, targets: [1]},
        {width: "50%", targets: [0]}
      ],
      destroy:true,
      responsive: true,
      language: {
        lengthMenu: "Mostrar _MENU_ productos por página",
        zeroRecords: "Ningún producto encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún producto encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
      }
    }
    };
    
    await this.listProductos();
    dataTable= $("#datatable_products").DataTable(dataTableOptions);


    if(dataTableIsInitialized){
      dataTable.destroy();
    }


    dataTableIsInitialized = true;

  }

  async listProductos() {
    const tableBody_products: HTMLTableElement = document.getElementById("tableBody_products") as HTMLTableElement;

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const productos = await response.json();
      console.log(productos);
      let contenido = ``;
      Object.values(productos).forEach((producto: any, index: number) => {
        contenido += `
          <tr>
            <td>${index + 1}</td>
            <td>${producto.name}</td>
            <td>${producto.email}</td>
            <td>${producto.address.city}</td>
            <td>${producto.company.name}</td>
            <td><i class="fa-solid fa-check" style="color: green"></i></td>
            <td>
              <button class="btn btn-sm btn-primary"><i class="fa-solid fa-pencil"></i></button>
              <button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
            </td>
          </tr>`;
      });
      tableBody_products.innerHTML = contenido;
    } catch (ex) {
      alert(ex);
    }

  }

}
