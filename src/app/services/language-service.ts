import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

languageMap : any = {
  English: {
  login: 'Login',
  register: 'Register',
  back:'Back',
  loginByPhone: 'Login By Phone',
  loginByFace: 'Login By Face',
  faceRecognition:'Face Recognition',
  setFace: 'Set Face',
  fullName:'Full Name',
  next: 'Next',
  phoneNumber:'Phone Number',
  createAccount: 'Create Account',
  reset: 'Reset',
  notSupported: 'Not Supported'
  },
  Hebrew: {
    login: 'התחבר',
    register: 'הרשם',
    back:'אחורה',
    loginByPhone: 'התחברות דרך טלפון',
    loginByFace: 'התחברות דרך זיהוי פנים',
    faceRecognition:'זיהוי פנים',
    setFace: 'קבע פנים',
    fullName:'שם מלא',
    next: 'הבא',
    phoneNumber:'מספר טלפון',
    createAccount: 'צור משתמש',
    reset: 'אפס',
    notSupported: 'לא נתמך'

    }

}

selectedLanguage: string = 'Hebrew'
constructor() { }

getLanguageMap(){
  return this.languageMap[this.selectedLanguage]
}

 getTranslation(key:string){
if (this.languageMap && key &&this.selectedLanguage && this.languageMap[this.selectedLanguage] && this.languageMap[this.selectedLanguage][key])

 return this.languageMap[this.selectedLanguage][key]
}

setLanguage(language: string){
this.selectedLanguage = language
}
}