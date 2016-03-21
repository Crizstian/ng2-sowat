import {Component,ElementRef,
        Inject,Input, OnInit} from 'angular2/core';
import {Router,RouterLink}               from 'angular2/router';
import {Observable}           from 'rxjs/Observable';
import {Observer}             from 'rxjs/Observer';
import {dispatcher,state}     from '../../logic/newStateDispatcher';
import {AppState}             from '../../logic/AppState';
import {Action,AsociadoActions,
        stateAction}          from '../../logic/Actions';
import {AsociadoService}      from '../../services/asociado.service';
import {Logger}               from '../../services/Logger.service';
import {HeaderCompnt}         from '../header/header.compnt';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector   : 'home',
  directives : [RouterLink,HeaderCompnt],
  templateUrl: 'app/components/home/templates/home.html'
})
export class HomeCompnt {
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    jQuery(this.elementRef.nativeElement).foundation();
  }
}
