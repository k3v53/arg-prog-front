import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHeader = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    // get the height of the first element
    const firstElement = document.querySelector('.landing')!;
    const firstElementHeight = firstElement.clientHeight;

    // update the showHeader property based on the scroll position
    this.showHeader = window.pageYOffset > firstElementHeight;
  }
}
