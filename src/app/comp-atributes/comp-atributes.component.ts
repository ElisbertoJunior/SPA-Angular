import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributes',
  templateUrl: './comp-atributes.component.html',
  styleUrls: ['./comp-atributes.component.css']
})
export class CompAtributesComponent implements OnInit {
  style: string = "enable"
  corFundo: string = "blue"
  corTexto: string = "white"
  item: string = ""
  list: string[] = []
  isEnable: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  toExchange() {
    if (this.style === "disable") {
      this.style = "enable"
    } else {
      this.style = "disable"
    }
  }

  addList() {
    this.list.push(this.item)
  }

}
