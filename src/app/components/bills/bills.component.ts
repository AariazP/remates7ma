import { Component } from '@angular/core';
import { TittleModuleComponent } from "../title-module/title-module.component";
import { BillsMetricComponent } from "../bills-metric/bills-metric.component";

@Component({
    selector: 'app-bills',
    standalone: true,
    templateUrl: './bills.component.html',
    styleUrl: './bills.component.css',
    imports: [TittleModuleComponent, BillsMetricComponent]
})
export class BillsComponent {

}
