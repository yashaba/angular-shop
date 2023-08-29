import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {OnScreenkeyboardService} from '../../../services/on-screenkeyboard.service'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { fullNameValidator } from 'src/app/validators/fullName.validator';
import { LanguageService } from 'src/app/services/language-service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit,AfterViewInit {
  parentInputValue: string = '';
  myForm: FormGroup;
  fullNameForm;
  phoneNumberForm;
  faceRecognitionForm;
  currRegistrationPhase:number = 0
  testObsrver$: BehaviorSubject<number>
  subscriptions: Subscription[] = []
  capturedImage: string | undefined 
  selectedLanguageMap: { login: string; register: string; back: string; loginByPhone: string; loginByFace: string; faceRecognition: string; setFace: string; fullName: string; next: string; phoneNumber: string; createAccount: string; reset: string; notSupported: string; } | { login: string; register: string; back: string; loginByPhone: string; loginByFace: string; faceRecognition: string; setFace: string; fullName: string; next: string; phoneNumber: string; createAccount: string; reset: string; notSupported: string; };

  
  
  // totalRegistrationPhases:number[] = Array.from({ length: 4 }, (_, i) => i)

  constructor(private onScreenkeyboardService: OnScreenkeyboardService, private fb: FormBuilder,private el: ElementRef, private renderer: Renderer2,private languageService : LanguageService) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, fullNameValidator]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      faceRecognition: ['', [Validators.required]]
    });
    this.fullNameForm = this.myForm.get('fullName')
    this.phoneNumberForm = this.myForm.get('phoneNumber')
    this.faceRecognitionForm = this.myForm.get('faceRecognition')
    this.onScreenkeyboardService.inputValue$.subscribe(value => {
      this.parentInputValue = value;
    });
    this.testObsrver$ = new BehaviorSubject<number>(0);
    this.selectedLanguageMap = this.languageService.getLanguageMap()


   }

  //  constructor(private fb: FormBuilder) {
  //    this.myForm = this.fb.group({
  //      fullName: ['', [Validators.required]],
  //      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  //      fourDigitNumber: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
  //    });
  //  }

  onImageCaptured(imageDataUrl: string) {
    console.log("🚀 ~ file: customer-register.component.ts:56 ~ CustomerRegisterComponent ~ onImageCaptured ~ imageDataUrl:", imageDataUrl)
    this.capturedImage = imageDataUrl;
    this.myForm.get('faceRecognition')?.setValue(imageDataUrl)
  }

  resetForm(){
  this.capturedImage = ''
  this.currRegistrationPhase = 0
  this.myForm.reset()
  this.onScreenkeyboardService.updateInputValue('');
  this.testObsrver$.next(this.currRegistrationPhase)

  }

  ngAfterViewInit(){
    this.subscriptions.push( 
      this.testObsrver$.subscribe(value =>{
        this.onElementVisibilityChange()
      } ));
  }

  onElementVisibilityChange(){
  this.renderer.destroy()
  setTimeout(()=>{
    const inputElement = this.el.nativeElement.querySelector('input');
    inputElement.focus();
    // Listen for focus events to prevent losing focus
    this.renderer.listen(inputElement, 'blur', (event) => {
      event.preventDefault();
      inputElement.focus();
    });
    
  }, 300)
  }
  // ngAfterViewInit() {
  //   const inputElement = this.el.nativeElement.querySelector('input');
  //   // Focus on the input field
  //   inputElement.focus();
  //   // Listen for focus events to prevent losing focus
  //   this.renderer.listen(inputElement, 'blur', (event) => {
  //     event.preventDefault();
  //     inputElement.focus();
  //   });
  // }
   onSubmit() {
     if (this.myForm.valid) {
     }
   }

  canProceed(pageNumber:number){
    const bla1 = Object.keys(this.myForm.controls)[pageNumber]
    const controlValue = this.myForm.controls[bla1]
    return !controlValue.valid

  }

  ngOnInit(): void {
  
  }

  updateChildValue() {
    this.onScreenkeyboardService.updateInputValue(this.parentInputValue);
  }

  setPage(number:number){
  
  }

  handleNext(){
  this.onScreenkeyboardService.updateInputValue('');
  this.currRegistrationPhase++
  this.testObsrver$.next(this.currRegistrationPhase)
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub =>sub.unsubscribe()));
  }
}
