import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeService } from './service/home.service';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        NgbPaginationModule
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }
