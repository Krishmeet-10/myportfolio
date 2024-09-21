import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "Java", src: "./assets/technologies/java.png"},
    {name: "MySQL", src: "./assets/technologies/mysql.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "Android", src: "./assets/technologies/android.png"},
    {name: "python", src: "./assets/technologies/python.webp"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return this.experienceItems; 
  }
}
