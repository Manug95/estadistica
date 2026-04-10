import { Routes } from '@angular/router';

import { EstadisticaDescriptiva } from './components/estadistica-descriptiva/estadistica-descriptiva';
import { AnalisisCombinatorio } from './components/analisis-combinatorio/analisis-combinatorio';

export const routes: Routes = [
    {
        path: "",
        component: EstadisticaDescriptiva
    },
    {
        path: "estadistica-descriptiva",
        component: EstadisticaDescriptiva
    },
    {
        path: "analisis-combinatorio",
        component: AnalisisCombinatorio
    }
];
