import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.services';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  public bannerInfo: any;
  public showBannerBoolean = false;

  constructor(private bannerService: BannerService) { }

  public ngOnInit() {
    this.getBannerContent();
  }

  public getBannerContent(): any {
    this.bannerService.getBannerData().subscribe(data => {
      this.bannerInfo = data.product;
      this.showBanner(this.bannerInfo.type);
    });
  }

  public showBanner(type: string): any {
    if (type === 'plan') {
      this.showBannerBoolean = true;
    }
  }
}
