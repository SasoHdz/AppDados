import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dados-celes';
  dadoRigth: string= '../assets/dados/fase1.png';
  dadoLefth: string = '../assets/dados/fase1.png';
  sameFaces: boolean= false;
  menssage: string = 'Sigue intentando!!!'

  randomNumber() {
   return Math.trunc(Math.random ()* 6 +1);
  }

  play(){
       let nLefth:number = this.randomNumber();
       let nRight:number = this.randomNumber();
       this.dadoLefth = '../assets/dados/fase'+nLefth+'.png';
       this.dadoRigth = '../assets/dados/fase'+nRight+'.png';

       this.sameFaces = (nLefth===nRight);
  }

  random = this.randomNumber();
}
