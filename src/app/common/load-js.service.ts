import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, Observable, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingExternalJsService {
  private loadedLibraries: { [url: string]: ReplaySubject<void> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: any) {
  }

  lazyLoad(libraries: string[]): Observable<any> {
    const libs = [];
    const rootPath = `assets/js/`;
    for (const l of libraries) {
      if (this.loadedLibraries[rootPath + l]) {
        libs.push(this.loadedLibraries[rootPath + l]);
      } else {
        if (l.split('.').pop() === 'js') {
          libs.push(this.loadScript(rootPath + l));
        } else {
          libs.push(this.loadStyle(rootPath + l))
        }
      }
    }
    return forkJoin(libs);
  }

  private loadScript(url: string): Observable<any> {
    this.loadedLibraries[url] = new ReplaySubject(1);
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    this.loadSource(script, url);
    script.src = url;
    return this.loadedLibraries[url].pipe(delay(200));
  }

  private loadStyle(url: string): Observable<any> {
    this.loadedLibraries[url] = new ReplaySubject(1);
    const style = this.document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    this.loadSource(style, url);
    style.href = url;
    return this.loadedLibraries[url].pipe(delay(200));
  }

  private loadSource(element: HTMLElement, url: string) {
    document.getElementsByTagName('head')[0].appendChild(element);
    element.addEventListener('load', () => {
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    }, false);
  }
}
