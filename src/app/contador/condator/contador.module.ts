import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador.component';


@NgModule({

    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorModule
    ]


})


export class ContadorModule{}