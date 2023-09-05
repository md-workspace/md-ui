import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                    { label: 'Báo cáo', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Sản xuất',
                items: [
                    { label: 'Phân loại', icon: 'pi pi-fw pi-sitemap', routerLink: ['manufacturing/hierarchy'] },
                    { label: 'Vào lò', icon: 'pi pi-fw pi-download', routerLink: ['manufacturing/hatching'] },
                ]
            },
            {
                label: 'Master data',
                items: [
                    { label: 'BoM', icon: 'pi pi-fw pi-file-o', routerLink: ['/master-data/bom'], badge: 'NEW' },
                ]
            },
        ];
    }
}
