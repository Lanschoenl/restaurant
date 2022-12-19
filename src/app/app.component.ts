import { AfterViewInit, Component } from '@angular/core';
import { LazyLoadingExternalJsService } from "./common/load-js.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private loadJS: LazyLoadingExternalJsService, private router: Router) {
    const html = document.getElementsByTagName('html')[0];
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        html.className = event.urlAfterRedirects.split('/')[1] + ' js'
      }
    })
  }

  ngAfterViewInit() {
    this.loadJS.lazyLoad(['message.js', 'init.js', 'main.js', 'menu.js'])
  }
}
