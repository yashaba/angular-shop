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
   console.log("🚀 ~ file: app.component.ts:32 ~ AppComponent ~ shouldShowComponent ~ this.route.snapshot:", this.router.url)
  //  console.log("🚀 ~ file: app.component.ts:32 ~ AppComponent ~ shouldShowComponent ~ currentRoute:", currentRoute)
    const currentRoute = this.router.url
    console.log("🚀 ~ file: app.component.ts:29 ~ AppComponent ~ shouldShowComponent ~ excludedRoutes.includes(currentRoute):", excludedRoutes.includes(currentRoute))
    return  !excludedRoutes.includes(currentRoute) ;
  }
}
