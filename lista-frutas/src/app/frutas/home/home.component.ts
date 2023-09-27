import { Component, OnInit } from '@angular/core';
import { Frutas } from '../frutas';
import { FrutasService } from '../frutas.service';

declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listaFrutas: Frutas[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private frutasService: FrutasService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }
 
  get() {
    this.frutasService.get().subscribe((data: Frutas[]) => {
      this.listaFrutas = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.frutasService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.listaFrutas = this.listaFrutas.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
