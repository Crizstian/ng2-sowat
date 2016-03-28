// Core components
import {Component,ElementRef,Inject}           from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,
        RouterOutlet  }                 from 'angular2/router';
// Landing page
import {HeaderCompnt}                   from './components/landing/header/header.compnt';
import {FooterCompnt}                   from './components/landing/footer/footer.compnt';
import {HomeCompnt}                     from './components/landing/home/home.compnt';
import {ServiciosCompnt}                from './components/landing/servicios/serivicios.compnt';
import {ContactCompnt}                  from './components/landing/contact/contact.compnt';
import {NosotrosCompnt}                 from './components/landing/nosotros/nosotros.compnt';
// blog

// sistema

// Services
import {Logger}                         from './services/Logger.service';
import {EmailService}                   from './services/email.service';

declare var jQuery:any;
declare var foundation:any;

@Component({
  selector    : 'my-app',
  templateUrl : 'app/app.html',
  directives: [HeaderCompnt,RouterOutlet,FooterCompnt],
  providers : [Logger,EmailService]
})
@RouteConfig([
  {path: '/',          as: 'Home',      component: HomeCompnt, useAsDefault: true},
  {path: '/servicios', as: 'Servicios', component: ServiciosCompnt},
  {path: '/nosotros',  as: 'Nosotros',  component: NosotrosCompnt},
  {path: '/contacto',  as: 'Contacto',  component: ContactCompnt},
  // {path: '/blog',  as: 'Blog',  component: BlogCompnt}
])
export class AppComponent{
  constructor(private elementRef: ElementRef){}

}
