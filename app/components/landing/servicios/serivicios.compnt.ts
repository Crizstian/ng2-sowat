import {Component,ElementRef} from 'angular2/core';
import {HeaderCompnt} from '../header/header.compnt';

declare var jQuery:any;

@Component({
  selector: 'land-serivicios',
  directives: [HeaderCompnt],
  templateUrl: 'app/components/landing/servicios/templates/servicios.html'
})
export class ServiciosCompnt{
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    jQuery(this.elementRef.nativeElement).foundation();
  }
}
