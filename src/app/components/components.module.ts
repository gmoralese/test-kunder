import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [],
  imports: [HomeComponent, BannerComponent],
  exports: [HomeComponent, BannerComponent]})

export class ComponentsModule {}
