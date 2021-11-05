import { Component, OnInit } from '@angular/core';
import { Covid } from './covid.model';
import { DetalleCovidService } from './detalle-covid.service';

@Component({
  selector: 'app-detalle-covid',
  templateUrl: './detalle-covid.page.html',
  styleUrls: ['./detalle-covid.page.scss'],
})
export class DetalleCovidPage implements OnInit {
  isLoading=false;
  covid: Covid;
  constructor(public detalleCovidService: DetalleCovidService) {
   }

  ngOnInit() {
    this.detalleCovidService.getCovids().subscribe(response=>{
      this.covid = response;
      console.log(response);
      this.isLoading=true;
    });
  }

  //ngOnInit() {
    //this.detalleCovidService.getCovidAll().subscribe((response: any)=>{
      //this.covidAll = response.results;
    //});
    //this.detalleCovidService.getCovids();
  //}

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

import { Component, OnInit } from '@angular/core';
import { Covid } from './covid.model';
import { DetalleCovidService } from './detalle-covid.service';

@Component({
  selector: 'app-detalle-covid',
  templateUrl: './detalle-covid.page.html',
  styleUrls: ['./detalle-covid.page.scss'],
})
export class DetalleCovidPage implements OnInit {
  covid: Covid;
  constructor(public detalleCovidService: DetalleCovidService) { }

  ngOnInit() {
    this.detalleCovidService.getCovids().subscribe(response=>{
      this.covid = response;
      console.log(response);
    });
  }
 
  

  //ngOnInit() {
    //this.detalleCovidService.getCovidAll().subscribe((response: any)=>{
      //this.covidAll = response.results;
    //});
    //this.detalleCovidService.getCovids();
  //}

}

*/
}
