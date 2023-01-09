import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FilmeInterface } from '../models/FilmeInterface.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo = "MoviesWatch"
  filmes: FilmeInterface[] = [
    {
      nome: "Avatar: O Caminho da Água",
      lancamento: "15/12/2022",
      duracao: "3h 12m",
      classificacao: 13,
      imagem_url:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mbYQLLluS651W89jO7MOZcLSCUw.jpg",
      generos: ["Ficção científica","Aventura", "Ação"],
      avaliacao: 80,
      sinopse: "12 anos depois de explorar Pandora e se juntar aos Na'vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre."
    },
    {
      nome: "Glass Onion: Um Mistério Knives Out",
      lancamento: "23/11/2022",
      duracao: "2h 20m",
      classificacao: 13,
      imagem_url:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zQJcENHbZUpLQ8RKYt9wTzcXCwv.jpg",
      generos: ["Mistério", "Thriller", "Comédia"],
      avaliacao: 80,
      sinopse: "O famoso detetive Benoit Blanc vai à Grécia para desvendar um mistério que envolve um bilionário e seu eclético círculo de amizades."
    }
  ]


  handlerMessage = '';
  roleMessage = '';
  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Deseja realmente favoritar este filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.mostrarNotificacao("top");
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async mostrarNotificacao(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      color: "success",
      message: 'Filme adicionado com sucesso!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
