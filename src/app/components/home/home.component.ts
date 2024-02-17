import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BillsComponent } from "../bills/bills.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidebarComponent, BillsComponent]
})
export class HomeComponent {

}
