import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderCompont {
    collapsed = true;
}