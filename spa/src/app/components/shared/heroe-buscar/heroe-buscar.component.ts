import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-buscar',
  templateUrl: './heroe-buscar.component.html'
})
export class HeroeBuscarComponent implements OnInit {
  heroes: any [] = [];
  texto: string;
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['texto']);
      this.texto = params['texto'];
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
      console.log(this.heroes);
    });
  }

}
