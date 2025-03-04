import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover: string = 'https://tm.ibxk.com.br/2022/11/21/21225117851006.jpg?ims=750x';
  cardTitle: string = 'Saiu o novo jogo assasins creed valhalla';
  cardDescription: string = 'Sinopse. O movimento do Grande Exército Pagão na Inglaterra durante as expansoes Vikings. O mapa mostra alguns dos reinos que o jogador pode explorar em Valhalla. Em Assassins Creed Valhalla, a história acontece perto do final do século IX, em 873, durante as Invasões Vikings da Grã Bretanha.'

  constructor() { }

  ngOnInit() {
  }

}
