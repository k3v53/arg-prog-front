import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experienciaArray: Experiencia[] = [];
  isLogged = false;

  constructor(
    private experienciaService: ExperienciaService,
    private tokenService: TokenService
  ) {}

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe((data) => {
      this.experienciaArray = data;
    });
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('No se pudo borrar la experiencia');
        }
      );
    }
  }
}
