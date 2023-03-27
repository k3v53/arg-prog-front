import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';

@Component({
  selector: 'app-skills-entry',
  templateUrl: './skills-entry.component.html',
  styleUrls: ['./skills-entry.component.css'],
})
export class SkillsEntryComponent {
  @Input() skill: Skill = new Skill('Skill', 50);
  porcentajeToDegrees(): Number {
    // Regla de 3 simple
    return (this.skill.porcentaje * 180) / 100;
  }
}
