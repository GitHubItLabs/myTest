import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';

const DECLARATIONS = [
]

const SERVICES = [
];

const MODULES = [
    LayoutModule
]


@NgModule({
    imports: [
        ...MODULES
    ],
    exports: [
        ...DECLARATIONS,
        ...MODULES
    ],
    declarations: [
        ...DECLARATIONS,
    ],
    providers: [
        ...SERVICES
    ],
})
export class SharedModule { }



