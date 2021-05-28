import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/home', icon: 'home' },
    { title: 'Contatos', url: '/folder/contacts', icon: 'mail-unread' },
    { title: 'Noticias', url: '/folder/news', icon: 'newspaper' },
    { title: 'Sobre', url: '/folder/about', icon: 'trash' },
    { title: 'Perfil', url: '/folder/profile', icon: 'person' },
    { title: 'Entrar', url: '/folder/login', icon: 'enter' },
    { title: 'Sair', url: '/folder/logout', icon: 'exit' },
  ];
  
}
