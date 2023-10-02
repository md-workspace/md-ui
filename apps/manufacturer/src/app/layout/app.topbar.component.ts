import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'md-topbar',
  styleUrls: ['./app.topbar.component.scss'],
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
  items!: MenuItem[];

  menus = [
    {
      title: 'Hoạt động',
      children: [
        {name: 'Phân loại', path: 'activity/phan-loai'},
        {name: 'Ấp trứng', path: 'activity/ap-trung'},
      ]
    },
    {
      title: 'Báo cáo',
      children: [
        {name: 'Báo cáo', path: ''}
      ]
    },
    {
      title: 'Cấu hình',
      children: [
        {name: 'Quy trình', path: 'cau-hinh/quy-trinh'},
        {name: 'Thiết bị', path: 'cau-hinh/thiet-bi'}
      ]
    }
  ];

  constructor(private readonly route: Router) {
  }

  onRoute(path: string) {
    this.route.navigate([path]).then();
  }
}
