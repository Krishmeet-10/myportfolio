import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/Krishmeet_May'24.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/krishmeet/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/Krishmeet-10', '_blank');
  }
}
