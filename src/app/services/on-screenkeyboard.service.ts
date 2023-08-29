import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnScreenkeyboardService {

  private inputValueSubject = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSubject.asObservable();

  updateInputValue(newValue: string) {
    this.inputValueSubject.next(newValue);
  }
}
