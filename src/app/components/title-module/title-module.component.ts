import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-module',
  standalone: true,
  imports: [],
  templateUrl: './title-module.component.html',
  styleUrl: './title-module.component.css'
})
export class TittleModuleComponent {

  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;

}
