import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private item;

  constructor(private router: Router) { 
    this.item = this.router.getCurrentNavigation().extras.state.item;
  }

  ngOnInit() {
    
  }

}
