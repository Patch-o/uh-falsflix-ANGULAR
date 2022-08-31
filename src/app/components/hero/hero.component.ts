import { FilmsInterface } from './../../model/films.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() films!: FilmsInterface;

  constructor() { }

  ngOnInit(): void {
    console.log('films', this.films);
  }

}
