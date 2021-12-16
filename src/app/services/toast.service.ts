import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }


  async toastDesarrollo() {
    const toast = await this.toastController.create({
      message: 'Función aun en desarrollo',
      duration: 2000
    });
    toast.present();
  }

}
