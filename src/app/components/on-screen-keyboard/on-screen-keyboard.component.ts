import { Component, Input, OnInit } from '@angular/core';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { OnScreenkeyboardService } from 'src/app/services/on-screenkeyboard.service';

@Component({
  selector: 'app-on-screen-keyboard',
  templateUrl: './on-screen-keyboard.component.html',
  styleUrls: ['./on-screen-keyboard.component.scss']
})
export class OnScreenKeyboardComponent implements OnInit {
  // type: 'keyboard' | 'numpad' = 'keyboard'
  keys: string[] = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];
  numbers: string[] = ['1','2','3','4','5','6','7','8','9','0']
  
  currSentance: string = '';
  isShift: boolean = true
  @Input() type:string = 'keyboard'

  keyPress$: Observable<Event>;
  keyRelease$: Observable<Event>;

  constructor(private onScreenkeyboardService : OnScreenkeyboardService) {
    this.keyPress$ = fromEvent(window, 'keydown');
    this.keyRelease$ = fromEvent(window, 'keyup');
    this.onScreenkeyboardService.inputValue$.subscribe(value => {
      this.currSentance = value;
    });
  }
    parentInputValue: string = '';


  updateChildValue() {
    this.onScreenkeyboardService.updateInputValue(this.currSentance);
  }

  ngOnInit(): void {

    const mergedEvents$ = merge(this.keyPress$, this.keyRelease$);
    //If time allows, add more features to keyboard
    mergedEvents$.subscribe(event => {
      if (event instanceof KeyboardEvent) {
      }
    });
  }

  toggleShift() {
  this.isShift = !this.isShift
  this.transformCharacterCase()
  }

  transformCharacterCase(){
  this.keys = this.keys.map(key => this.isShift ? key.toLocaleUpperCase() : key.toLocaleLowerCase())
  }

  addCharacter(char: string) {
    this.currSentance += char
    this.isShift = false
    this.transformCharacterCase()
    this.onScreenkeyboardService.updateInputValue(this.currSentance);
    console.log(this.currSentance);
  }
  removeCharacter() {
    this.currSentance = this.currSentance.slice(0, this.currSentance.length - 1)
    this.onScreenkeyboardService.updateInputValue(this.currSentance);

    console.log(this.currSentance);

  }

}
