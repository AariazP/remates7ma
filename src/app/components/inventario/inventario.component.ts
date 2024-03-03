import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BillsMetricComponent } from '../bills-metric/bills-metric.component';
import { ProductComponent } from '../product/product.component';
import { TittleModuleComponent } from '../title-module/title-module.component';
import { OptionsCRUDComponent } from '../options-crud/options-crud.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [SidebarComponent, TittleModuleComponent, 
    OptionsCRUDComponent,   BillsMetricComponent, ProductComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

}
