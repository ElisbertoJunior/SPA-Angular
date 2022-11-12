import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: string[] = []
  menuType: string = ""

  constructor() {
    this.products = [
      "Mouse",
      "Teclado",
      "Cabo",
      "Placa de Video"
    ]
  }

  ngOnInit(): void {

  }

  add() {
    this.products.push("Elisberto")
  }

  remove(index: number) {
    this.products.splice(index, 1)
  }


}
