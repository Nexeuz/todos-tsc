import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular"

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptUIListViewModule, CommonModule, TNSCheckBoxModule, HomeRoutingModule, ReactiveFormsModule, NativeScriptFormsModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
