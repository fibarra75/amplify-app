import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';;
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';
import awsconfig from '../aws-exports';
//import { Amplify } from 'aws-amplify';

//Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmplifyAuthenticatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}