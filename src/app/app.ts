import { Component } from '@angular/core';
import { Home } from './home/home';
import { HousingLocation } from './housing-location/housing-location';

@Component({
  selector: 'app-root',
  imports: [Home, HousingLocation],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home />
      </section>
    </main>
  `,
  styleUrls: ['./app.css'],
})
export class App {}
