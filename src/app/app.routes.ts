import { Routes } from '@angular/router';

import { EstadisticaDescriptiva } from './components/estadistica-descriptiva/estadistica-descriptiva';

export const routes: Routes = [
    {
        path: "",
        component: EstadisticaDescriptiva
    },
    {
        path: "estadistica-descriptiva",
        component: EstadisticaDescriptiva
    }
];
