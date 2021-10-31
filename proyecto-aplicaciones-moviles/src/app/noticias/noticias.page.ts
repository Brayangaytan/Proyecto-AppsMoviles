import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia.model';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: Noticia[];
  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.noticias = this.noticiaService.getNoticias();
  }

}
