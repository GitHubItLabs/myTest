import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        SharedModule
    ],
    providers: []
})
export class HomeModule { }
