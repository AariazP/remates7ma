import { Component } from '@angular/core';
import { TittleModuleComponent } from "../title-module/title-module.component";
import { BillsMetricComponent } from "../bills-metric/bills-metric.component";
import { BillsListComponent } from "../bills-list/bills-list.component";

@Component({
    selector: 'app-bills',
    standalone: true,
    templateUrl: './bills.component.html',
    styleUrl: './bills.component.css',
    imports: [TittleModuleComponent, BillsMetricComponent, BillsListComponent]
})
export class BillsComponent {

}
