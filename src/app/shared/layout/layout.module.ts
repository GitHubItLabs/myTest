import { NgModule } from '@angular/core';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

const DECLARATIONS = [
    NavbarComponent,
    PageComponent,
    PublicComponent,
    SecureComponent,
    SidebarComponent
]

const SERVICES = [
];

const MODULES = [
    RouterModule,
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
export class LayoutModule { }
