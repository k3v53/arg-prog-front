import { Component } from '@angular/core';
import {
  faArrowsLeftRight,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-entry',
  templateUrl: './experience-entry.component.html',
  styleUrls: ['./experience-entry.component.css'],
})
export class ExperienceEntryComponent {
  faSuitCase = faSuitcase;
  faArrowsLeftRight = faArrowsLeftRight;
}
