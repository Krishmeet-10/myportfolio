import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,

  templateUrl: './footer.component.html'
})
export class FooterComponent {

  getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
}
