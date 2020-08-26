import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { NavController } from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list = [];

  constructor(private service: ServicesService, private navCtrl: NavController, private router: Router) { }

  getList(){
    this.service.serGetListe()
      .then((data: Array<any>) => {
     
        let tags = data['tags'];
        this.list = tags;
  
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
