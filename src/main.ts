import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importamos AppModule

import './styles.css';


// Arrancar la aplicación Angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
