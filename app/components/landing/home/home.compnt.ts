import {Component,ElementRef,
        Inject,Input, OnInit} from 'angular2/core';
import {Router,RouterLink}               from 'angular2/router';
import {Observable}           from 'rxjs/Observable';
import {Observer}             from 'rxjs/Observer';
import {HeaderCompnt}         from '../header/header.compnt';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'home',
  directives : [RouterLink,HeaderCompnt],
  templateUrl: 'app/components/landing/home/templates/home.html'
})
export class HomeCompnt {
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    jQuery(this.elementRef.nativeElement).foundation();
  }
}
