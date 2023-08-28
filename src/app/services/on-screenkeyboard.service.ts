import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnScreenkeyboardService {

  private inputValueSubject = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSubject.asObservable();

  updateInputValue(newValue: string) {
    console.log("🚀 ~ file: on-screenkeyboard.service.ts:13 ~ OnScreenkeyboardService ~ updateInputValue ~ newValue:", newValue)
    this.inputValueSubject.next(newValue);
  }
}
