import { Component } from '@angular/core';
import { LanguageService } from './services/language-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inShopTest';
  selectedLanguageMap


  constructor(public languageService : LanguageService,private router: Router){
    this.selectedLanguageMap = this.languageService.getLanguageMap()
  }
  

  
  
  shouldShowComponentByRoute(excludedRoutes:string[]) {
    const currentRoute = this.router.url
    return  !excludedRoutes.includes(currentRoute) ;
  }
}
