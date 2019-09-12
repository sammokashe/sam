
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MaterialModule} from './material/material.module';
import{ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule,MatGridListModule,MatInputModule,MatIconModule,MatFormFieldModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrumbComponent } from './crumb/crumb.component';
import { ProuctionComponent } from './production/prouction.component';
import { ModularComponent } from './modular/modular.component';
import { SolutionComponent } from './solution/solution.component';
import { ColorComponent } from './color/color.component';
import { PayroleComponent } from './payrole/payrole.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ColorCodeComponent } from './color-code/color-code.component';
import { ColorNameComponent } from './color-name/color-name.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CrumbComponent,
    ProuctionComponent,
    ModularComponent,
    SolutionComponent,
    ColorComponent,
    PayroleComponent,
    SidenavComponent,
    ColorCodeComponent,
    ColorNameComponent
  ],
  imports: [MatButtonModule,FormsModule ,
    BrowserModule,MatFormFieldModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatGridListModule,
    MatCheckboxModule,
    MatInputModule,MatIconModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

