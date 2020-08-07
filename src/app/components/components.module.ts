import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [CommonModule],
  exports: [HomeComponent, BannerComponent]})

export class ComponentsModule {}
