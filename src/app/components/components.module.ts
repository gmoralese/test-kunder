import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [HomeComponent],
  exports: [HomeComponent, BannerComponent]})

export class ComponentsModule {}
