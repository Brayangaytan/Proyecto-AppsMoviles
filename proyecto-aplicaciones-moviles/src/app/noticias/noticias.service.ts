import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  private noticias: Noticia[] = 
  [
    {
      id: '1',
      titulo: 'Ejercicio para la memoria y la capacidad de concentración',
      imagen: 'https://www.sabervivirtv.com/medio/2020/12/15/los-motivos-por-los-que-jugar-al-ajedrez-es-bueno-para-la-salud_a201a4f5_1200x630.jpg',
      autor: 'Javier Vargas',
      info:'El ajedrez no te da lo que no tienes, pero potencia las facultades innatas e influye de forma muy beneficiosa en el desarrollo de la personalidad”, sostenía el gran maestro y pedagogo Boris Slótinik.',
      categoria: 'Salud',
      fecha: '31 de octubre, 2021'
    },
    {
      id: '2',
      titulo: 'Facebook cambia de nombre a Meta, Zuckerberg quiere construir un metaverso',
      imagen: 'https://www.unotv.com/uploads/2021/10/stillmetaaa-134422.jpg',
      autor: ' AFP/Reuters',
      info:'Mark Zuckerberg anunció que Facebook cambia de nombre y se llamará Meta, el cual está relacionado con el concepto de metaverso, que basicamente hace referencia a un mundo infinito de comunidades virtuales interconectadas.',
      categoria: 'Ciencia y Tecnologia',
      fecha: '28 octubre, 2021'
    },
    {
      id: '3',
      titulo: 'América vs Tigres, una rivalidad en ascenso',
      imagen: 'https://img.vavel.com/downloader-la-6172453686704-1634878814033.jpg',
      autor: 'Erick Antonio Guerrero Aldana',
      info:'En los últimos años estas 2 instituciones se han visto la cara en instancias finales, llenas de polémica, emociones y goles, incluidas finales, y volteretas. El balance general entre ambas escuadras favorece a los azulcremas con 39 victorias en 110 partidos, 37 empates y 34 victorias para los de la sultana del norte.',
      categoria: 'Deportes',
      fecha: '21 de octubre, 2021'
    },
    {
      id: '4',
      titulo: 'Samuel García toma protesta como gobernador de Nuevo León',
      imagen: 'https://www.milenio.com/uploads/media/2021/09/30/samuel-garcia-toma-protesta-gobernador.jpeg',
      autor: 'Esther Herrera, Pedro Delgado',
      info:'El integrante de Movimiento Ciudadano se convertirá en el político más joven en asumir el Poder Ejecutivo en el estado.',
      categoria: 'Política',
      fecha: '4 octubre, 2021'
    },
    {
      id: '5',
      titulo: 'Prevén Primeras Nevadas en Chihuahua por Frente Frío Número 2',
      imagen: 'https://imagenes.milenio.com/O0pHg4foJRd-BgXzj4N-iFT1hQo=/958x596/https://www.milenio.com/uploads/media/2021/10/02/nevadas-chihuahua-originaron-entrada-frente_0_1_1200_746.jpeg',
      autor: 'Norma Ponce',
      info:' La Coordinación Estatal de Protección Civil de Chihuahua emitió un aviso preventivo por lluvias, bajas temperaturas y nevadas sobre la zona serrana, que se presentarán hoy y mañana',
      categoria: 'Clima',
      fecha: '3 octubre, 2021'
    },
    {
      id: '6',
      titulo: 'Black Clover: ¿el ‘anime’ continuará en su primera película?',
      imagen: 'https://guiltybit.com/wp-content/uploads/2021/03/pelicula-de-black-clover.jpg',
      autor: 'Mateo Riveros',
      info:'Ya que el ‘anime’ de Black Clover terminará con el enfrentamiento entre Asta y Liebe, justo en medio del arco 11 del ‘manga’, existe la posibilidad de que la película adapte el resto del arco. Sin embargo, dado que los eventos del ‘anime’ no están muy alejados de lo que actualmente está ocurriendo en las páginas del ‘manga’, lo más probable es que la película de Black Clover sea una historia 100% original. Sin embargo, por el momento no hay certeza.',
      categoria: 'Entretenimiento',
      fecha: '28 de marzo, 2021'
    }
  ];

  constructor() { }

  getNoticias(){
    return [...this.noticias];
  }

  getNoticia(idNoticia: string){
    return {...this.noticias.find(
      (noticia: Noticia)=>{
        return noticia.id === idNoticia
      }
    )}
  }

}

