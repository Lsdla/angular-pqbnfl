import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

/* Le "selector", "app-product-alerts", identifie le composant. Par convention, les sélecteurs de composants angulaires commencent par le préfixe app-, suivi du nom du composant. */

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'] /* doit centenir des crochets */
})

/* Les noms de fichier : "templateUrl" et "styleUrls" de modèle et de style font référence au HTML et au CSS du composant.

La définition exporte également la classe , qui gère les fonctionnalités du composant.@Component()ProductAlertsComponent */
export class ProductAlertsComponent implements OnInit {

  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}