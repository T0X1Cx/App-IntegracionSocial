import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-identidad-genero',
  templateUrl: './identidad-genero.page.html',
  styleUrls: ['./identidad-genero.page.scss'],
})
export class IdentidadGeneroPage implements OnInit {

  constructor(private toastController: ToastService) { }

  ngOnInit() {
  }

  toastDesarrollo(){
    this.toastController.toastDesarrollo();
  }
}
