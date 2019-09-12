import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumbComponent } from './crumb/crumb.component';
import { SolutionComponent } from './solution/solution.component';
import { ProuctionComponent } from './production/prouction.component';
import { ColorComponent } from './color/color.component';
import { PayroleComponent } from './payrole/payrole.component';
import { ModularComponent } from './modular/modular.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ColorNameComponent} from './color-name/color-name.component';
import {ColorCodeComponent} from './color-code/color-code.component';






const routes: Routes = [   
{ path:'', component: LoginComponent},
{path:'login', component: LoginComponent},
{path:'sidenav', component: SidenavComponent,

children:[
{ path:'', component: DashboardComponent},
{ path:'prouction', component: ProuctionComponent},
{ path:'crumb', component: CrumbComponent},
{ path:'solution', component: SolutionComponent},
{ path:'modular', component: ModularComponent},
{ path:'color', component: ColorComponent,

children:[
{ path:'color-name', component: ColorNameComponent},
{ path:'color-code', component: ColorCodeComponent}]},

{ path:'payrole', component: PayroleComponent}
]
},
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
