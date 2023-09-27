import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frutas } from '../frutas';
import { FrutasService } from '../frutas.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  fruitForm: Frutas = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private frutaService: FrutasService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.frutaService.getById(id).subscribe((data) => {
      this.fruitForm = data;
    });
  }
 
  update() {
    this.frutaService.update(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/frutas/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
