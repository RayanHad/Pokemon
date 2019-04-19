import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  pokemon: Pokemon;
  @Input() id: number;
  constructor(private activatedRoute: ActivatedRoute, private location: Location, private pokemonService: PokemonService) { }

  ngOnChanges() {
    if(this.id){
      this.getPokemon();
    }
  }

  getPokemon(){
    this.pokemonService.getPoke(this.id).subscribe(poke => this.pokemon = poke);
  }

  goBack(){
    this.location.back();
  }
}
