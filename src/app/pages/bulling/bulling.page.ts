import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-bulling',
  templateUrl: './bulling.page.html',
  styleUrls: ['./bulling.page.scss'],
})
export class BullingPage implements OnInit {

  constructor(private toastController: ToastService) { }

  ngOnInit() {
  }

  toastDesarrollo(){
    this.toastController.toastDesarrollo();
  }
}
