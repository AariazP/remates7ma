import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InventarioComponent } from './components/inventario/inventario.component';

export const routes: Routes = [
    
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'inventario',
        component: InventarioComponent
    },
    {
        path: '**',
        component: LoginComponent
    },
];