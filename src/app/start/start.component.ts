import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  template: `
    <div>
        <h1>Welcome to my Portfolio</h1>
        <h2>Hello, my name is Santiago. I am a 19-year-old back-end developer.</h2>
        <button type="button" (click)=next()>See more →</button>
    </div>
  `,
  styles: `
    div{
      height: 100vh;
      width: 100vw;
      background-color: black; 
      display: flex;
      flex-direction: column;
      justify-content: space-evenly; 
      align-items: center; 
      color: white;
    }
    button{
      background: linear-gradient(to right,oklch(61.42% .238 15.34), oklch(47.66% .246 305.88));
      border: none;
      border-radius: 15px;
      color: white;
      font-size: 1.8em;
      padding: 1.5%;
      cursor: pointer;
    }
  `
})
export class StartComponent {
  next(){
  }
}
