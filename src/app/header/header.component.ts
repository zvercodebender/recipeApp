import { componentFactoryName } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderCompont {
    @Output() featureSelected = new EventEmitter<string>();

    collapsed = true;

    onSelect( feature: string ) {
        console.log("Setting feature to " + feature);
        this.featureSelected.emit( feature );
      }
}