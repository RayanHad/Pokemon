import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../pokemon.service';
import { PagedData } from 'src/app/models/paged-data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon:PagedData<Pokemon> = {data:[],limit:20,offset:0};
  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) { }
  
  getPokemons(){
    this.pokemonService.getPokemons(this.pokemon.offset).subscribe(pokemons =>{this.pokemon.data = this.pokemon.data.concat(pokemons.data);
      this.pokemon.offset = pokemons.offset+20;
      });  }

  ngOnInit() {
    this.getPokemons();
  }

  onScroll() {
    this.getPokemons();
  }


}
