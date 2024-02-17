import { Component, Input } from '@angular/core';
import { ProfileMenuComponent } from "../profile-menu/profile-menu.component";

@Component({
    selector: 'app-title-module',
    standalone: true,
    templateUrl: './title-module.component.html',
    styleUrl: './title-module.component.css',
    imports: [ProfileMenuComponent]
})
export class TittleModuleComponent {

  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;

}
