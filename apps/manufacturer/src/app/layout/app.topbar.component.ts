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
        {name: 'Hoạt động', path: 'hoat-dong'},
        {name: 'Phân loại', path: ''},
        {name: 'Ấp trứng', path: ''},
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
        {name: 'Cấu hình', path: ''}
      ]
    }
  ];

  constructor(private readonly route: Router) {
  }

  onRoute(path: string) {
    this.route.navigate([path]).then();
  }
}
