import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { NavigationExtras, Router } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list = [];
  // loading;

  constructor(private service: ServicesService, private navCtrl: NavController, private router: Router, 
              private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  presentLoading() {
    this.loadingCtrl.create({  })
    .then((res) => {
      res.present();
   })
  }

  getList(){
    this.presentLoading();
    this.service.serGetListe()
      .then((data: Array<any>) => {

        let tags = data['tags'];
        this.list = tags;

        this.loadingCtrl.dismiss().then((res) => { })
        .catch((error) => {
        });

       this.toastCtrl.create({
          message: 'Your List has been getting successfully.',
          duration: 2000
        }).then(res => {
          res.present();
        });
        
      }) 
      .catch((err) => {})
  }

  clikItem(item){
    const navExtras: NavigationExtras = {state: {item: item}}
    this.router.navigateByUrl("/detail", navExtras);
  }

  ngOnInit() {
    this.getList();
  }

}
