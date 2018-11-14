import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMembersPage1 } from './add-members1';

@NgModule({
	declarations: [
		AddMembersPage1,
	],
	imports: [
		IonicPageModule.forChild(AddMembersPage1)
	],
	exports: [
		AddMembersPage1
	]
})

export class AddMembers1Module { }
