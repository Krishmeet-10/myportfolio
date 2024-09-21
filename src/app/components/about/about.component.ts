import {Component} from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  getExperienceYears(): number {
    return 1;
  }

}
