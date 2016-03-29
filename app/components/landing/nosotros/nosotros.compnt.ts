import {Component,ElementRef} from 'angular2/core';
import {HeaderCompnt} from '../header/header.compnt';

declare var jQuery:any;

@Component({
  selector   : 'about',
  directives: [HeaderCompnt],
  templateUrl: 'app/components/landing/nosotros/templates/nosotros.html'
})
export class NosotrosCompnt{
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    jQuery(this.elementRef.nativeElement).foundation();
  }
}
