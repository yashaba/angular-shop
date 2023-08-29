import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
languages = [{name:'English' , icon: 'us'} , {name: 'Hebrew', icon: 'il'}]
selectedLanguage!: { name: string; icon: string; } 
selectingLanguage: boolean = false


  constructor(private languageService: LanguageService,private router: Router) { }

  setLanguage(selectedLanguage: { name: string; icon: string; }) {
    this.selectedLanguage = selectedLanguage
    this.toggleLanguageSelection()
    this.languageService.setLanguage( this.selectedLanguage.name)
    // this.refreshLanguages()
  }

  refreshLanguages() {
    this.router.navigateByUrl('/');
  }

  toggleLanguageSelection(){
    this.selectingLanguage =  !this.selectingLanguage
  }

  ngOnInit(): void {
    this.selectedLanguage = this.languages[0] as {name:'Hebrew' , icon: '*'}
  }



}
