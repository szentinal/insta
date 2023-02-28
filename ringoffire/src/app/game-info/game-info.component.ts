import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit,OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking.'},
    { title: 'You', description: 'You decide who drinks.'},
    { title: 'Me', description: 'Congrats! Drink a shot.'},
    { title: 'Chicks', description: 'All girls drink.'},
    { title: 'Men', description: 'All men drink.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'},
    { title: 'Rule', description: 'Make a new rule.'}
  ];

  title ='';
  description ='';

  @Input() card:string;

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.card){
    console.log('Current card is ', this.card);
    let cardNumber =  +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber -1].title;
    this.description = this.cardAction[cardNumber -1].description;
  }
}
}
