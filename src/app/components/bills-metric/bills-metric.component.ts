import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bills-metric',
  standalone: true,
  imports: [],
  templateUrl: './bills-metric.component.html',
  styleUrl: './bills-metric.component.css'
})
export class BillsMetricComponent {

  @Input() image!: string;
}
