import { Component } from '@angular/core';
import { TittleModuleComponent } from "../title-module/title-module.component";

@Component({
    selector: 'app-bills',
    standalone: true,
    templateUrl: './bills.component.html',
    styleUrl: './bills.component.css',
    imports: [TittleModuleComponent]
})
export class BillsComponent {

}
