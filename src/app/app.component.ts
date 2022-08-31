import { Component } from '@angular/core';
import { FilmsInterface } from './model/films.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';


  public ActionMovies: FilmsInterface = {
    title: 'Action movies',
    gallery: [{
      src: "../assets/images/Accion/ejercitomuertos.jpg",
      alt: "ejercito de muertos"
    },
    {
      src:"../assets/images/Accion/elprotector.webp",
      alt: "El protector"
    },
    {
      src:"../assets/images/Accion/equalizer2.webp",
      alt: "Equalizer 2"
    },
    {
      src:"../assets/images/Accion/heat.webp",
      alt: "Heat"
    },
    {
      src:"../assets/images/Accion/killbill2.webp",
      alt: "Kill Bill 2"
    },
    {
      src:"../assets/images/Accion/terminator2.webp",
      alt: "Terminator 2"
    }
  ]
  }
  public AnimeMovies: FilmsInterface = {
    title: 'Anime movies',
    gallery: [{
      src: "../assets/images/Anime/ajin.jpg",
      alt: "ejercito de muertos"
    },
    {
      src:"../assets/images/Anime/castilloambulante.webp",
      alt: "El protector"
    },
    {
      src:"../assets/images/Anime/chihiro.webp",
      alt: "Equalizer 2"
    },
    {
      src:"../assets/images/Anime/evangelion.webp",
      alt: "Evangelion"
    },
    {
      src:"../assets/images/Anime/gitsarise.webp",
      alt: "gitsarise"
    },
    {
      src:"../assets/images/Anime/gundam.webp",
      alt: "gundam"
    }
  ]
  }
  public ComedyMovies: FilmsInterface = {
    title: 'Comedy movies',
    gallery: [{
      src: "../assets/images/Comedia/casi300.webp",
      alt: "Casi 300"
    },
    {
      src:"../assets/images/Comedia/cazafantasmas.webp",
      alt: "Cazafantasmas"
    },
    {
      src:"../assets/images/Comedia/dictador.webp",
      alt: "Dictador"
    },
    {
      src:"../assets/images/Comedia/family guy.webp",
      alt: "Family guy"
    },
    {
      src:"../assets/images/Comedia/rickandmorty.webp",
      alt: "Rick & Morty"
    },
    {
      src:"../assets/images/Comedia/juerga.webp",
      alt: "Juerga"
    }
  ]
  }
  public ScifiMovies: FilmsInterface = {
    title: 'Sci-fi movies',
    gallery: [{
      src: "../assets/images/Sci-fi/6dia.webp",
      alt: "6º dia"
    },
    {
      src:"../assets/images/Sci-fi/12monos.webp",
      alt: "12 monos"
    },
    {
      src:"../assets/images/Sci-fi/core.webp",
      alt: "Core"
    },
    {
      src:"../assets/images/Sci-fi/gits.webp",
      alt: "Gits"
    },
    {
      src:"../assets/images/Sci-fi/doom.webp",
      alt: "Doom"
    },
    {
      src:"../assets/images/Sci-fi/startrek.webp",
      alt: "Star-Trek"
    }
  ]
  }
  public PopularMovies: FilmsInterface = {
    title: 'popular movies',
    gallery: [{
      src: "../assets/images/Top10/6-aquinohay.webp",
      alt: "Aqui no hay quien viva"
    },
    {
      src:"../assets/images/Top10/9-poder.webp",
      alt: "Poder"
    },
    {
      src:"../assets/images/Top10/7-blacklist.webp",
      alt: "Blacklist"
    },
    {
      src:"../assets/images/Top10/8-ricos.webp",
      alt: "Ricos"
    },
    {
      src:"../assets/images/Top10/4-lostinspace.webp",
      alt: "Lost in space"
    }
  ]
  }
}
