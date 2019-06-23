import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AuthService } from './user-profile/user-profile-shared/auth.service';
import { CoreModule } from 'app/core/core.module';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { routingModule } from './app.routing'
import { AgmCoreModule } from '@agm/core'
import { MeetingsCoreModule } from './meetings/meetings-core/meetings-core.module'
import { UserProfileCoreModule } from './user-profile/user-profile-core/user-profile-core.module'
import { TopicsCoreModule } from './topics/topics-core/topics-core.module'
import { MatSidenavModule } from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    routingModule,
    // ----
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, /* maybe move to its own module: DbModule; e.g. LoginModule would not require full db (for lazy loading) */
    AngularFireAuthModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8eJ4NjIFWy0tABOEasmykdAj8e7aenL0',
      libraries: [
        'places',
        'geometry',
      ],
    }),
    // FlexLayoutModule,
    MeetingsCoreModule,
    UserProfileCoreModule,
    TopicsCoreModule,
    MatSidenavModule,
  ],
  providers: [
    AuthService,
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent,
    // provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true}),
  ],
})
export class AppModule { }
