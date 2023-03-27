import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skillArray: Skill[] = [];
  isLogged = false;

  constructor(
    private skillService: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillService.lista().subscribe((data) => {
      this.skillArray = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(
        (data) => {
          this.cargarSkill();
        },
        (err) => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }
}
