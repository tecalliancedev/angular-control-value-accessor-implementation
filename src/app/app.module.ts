import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SpaceshipComponent } from './spaceship/spaceship.component';
import { SpaceshipConfigComponent } from './spaceship-config/spaceship-config.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, SpaceshipComponent, SpaceshipConfigComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
