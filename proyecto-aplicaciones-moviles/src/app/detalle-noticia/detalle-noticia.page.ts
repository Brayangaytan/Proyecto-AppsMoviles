import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../noticias/noticia.model';
import { NoticiasService } from '../noticias/noticias.service';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.page.html',
  styleUrls: ['./detalle-noticia.page.scss'],
})
export class DetalleNoticiaPage implements OnInit {

  idNoticia: string;
  noticia: Noticia;
  constructor(private activatedRouted: ActivatedRoute,
    private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap=>{
      this.idNoticia = paramMap.get('idNoticia');
      this.noticia = this.noticiaService.getNoticia(this.idNoticia);
    });
  }

}
