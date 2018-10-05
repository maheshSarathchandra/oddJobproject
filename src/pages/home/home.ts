import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OddJobServiceProvider} from "../../providers/odd-job-service/odd-job-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[OddJobServiceProvider]
})
export class HomePage {
 types:Array<any>
  constructor(public navCtrl: NavController,public oddJobService:OddJobServiceProvider) {



  }
 ionViewDidLoad(){
    this.oddJobService.getOddJobType().subscribe(types=>{
      this.types = types;
    })
 }


}
