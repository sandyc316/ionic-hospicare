import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMembersPage2 } from './add-members2';

@NgModule({
	declarations: [
		AddMembersPage2,
	],
	imports: [
		IonicPageModule.forChild(AddMembersPage2)
	],
	exports: [
		AddMembersPage2
	]
})

export class AddMembers2Module { }
