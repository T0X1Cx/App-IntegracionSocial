import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-violencia-genero',
  templateUrl: './violencia-genero.page.html',
  styleUrls: ['./violencia-genero.page.scss'],
})
export class ViolenciaGeneroPage implements OnInit {

  constructor(private toastController: ToastService) { }

  ngOnInit() {
  }

  toastDesarrollo(){
    this.toastController.toastDesarrollo();

  }

}
