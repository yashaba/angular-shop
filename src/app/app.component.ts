import { Component } from '@angular/core';
import { LanguageService } from './services/language-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inShopTest';
  selectedLanguageMap


  constructor(public languageService : LanguageService){
    this.selectedLanguageMap = this.languageService.getLanguageMap()
  }
}
