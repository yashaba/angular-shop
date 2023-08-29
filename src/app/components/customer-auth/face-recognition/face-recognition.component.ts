import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../../services/language-service';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.scss']
})
export class FaceRecognitionComponent implements OnInit {
  @Output() imageCaptured: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;
  selectedLanguageMap: { login: string; register: string; back: string; loginByPhone: string; loginByFace: string; faceRecognition: string; setFace: string; fullName: string; next: string; phoneNumber: string; createAccount: string; reset: string; notSupported: string; } | { login: string; register: string; back: string; loginByPhone: string; loginByFace: string; faceRecognition: string; setFace: string; fullName: string; next: string; phoneNumber: string; createAccount: string; reset: string; notSupported: string; };

  ngOnInit(): void {
    this.startCamera();
  }

  constructor(private languageService : LanguageService) {
    this.selectedLanguageMap = this.languageService.getLanguageMap()

   }

  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  takeSnapshot() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUrl = canvas.toDataURL('image/png');
    this.imageCaptured.emit(imageDataUrl)
  }
}