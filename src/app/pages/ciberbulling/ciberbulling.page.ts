import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-ciberbulling',
  templateUrl: './ciberbulling.page.html',
  styleUrls: ['./ciberbulling.page.scss'],
})
export class CiberbullingPage implements OnInit {

  constructor(private toastController: ToastService) { }

  ngOnInit() {
  }

  toastDesarrollo(){
    this.toastController.toastDesarrollo();
  }

}
