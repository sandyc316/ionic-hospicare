import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembersListPage } from './members-list';

@NgModule({
	declarations: [
		MembersListPage,
	],
	imports: [
		IonicPageModule.forChild(MembersListPage)
	],
	exports: [
		MembersListPage
	]
})

export class MembersListModule { }
