import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frutas } from '../frutas';
import { FrutasService } from '../frutas.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  fruitForm: Frutas = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0,
  };
 
  constructor(private fruitService:FrutasService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/frutas/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
