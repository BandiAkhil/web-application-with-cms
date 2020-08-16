import { NgModule } from '@angular/core';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from 'src/app/modules/home/slider/slider.component';
import { WelcomeComponent } from 'src/app/modules/home/welcome/welcome.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent, WelcomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
