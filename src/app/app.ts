import { Component, signal,HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const x =
      (window.innerWidth / 2 - event.clientX) / 40;

    const y =
      (window.innerHeight / 2 - event.clientY) / 40;

    const circle =
      document.getElementById('circle');

    const square =
      document.getElementById('square');

    const triangle =
      document.getElementById('triangle');

    if (circle) {
      circle.style.transform =
        `translate(${x}px, ${y}px)`;
    }

    if (square) {
      square.style.transform =
        `translate(${x * 1.5}px, ${y * 1.5}px)`;
    }

    if (triangle) {
      triangle.style.transform =
        `translate(${x * 0.8}px, ${y * 0.8}px)`;
    }

  }
}
