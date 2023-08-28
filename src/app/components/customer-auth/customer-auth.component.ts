import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-service';

@Component({
  selector: 'app-customer-auth',
  templateUrl: './customer-auth.component.html',
  styleUrls: ['./customer-auth.component.scss']
})
export class CustomerAuthComponent implements OnInit {
  selectedLanguageMap: { login: string; register: string; back: string; loginByPhone: string; loginByFace: string; faceRecognition: string; setFace: string; fullName: string; next: string; phoneNumber: string; createAccount: string; reset: string; notSupported: string; } | { login: string; register: string; back: string; loginByPhone: string; loginByFace: string; faceRecognition: string; setFace: string; fullName: string; next: string; phoneNumber: string; createAccount: string; reset: string; notSupported: string; };

  constructor(private languageService : LanguageService) {
    this.selectedLanguageMap = this.languageService.getLanguageMap()

   }

  ngOnInit(): void {
  }

}
