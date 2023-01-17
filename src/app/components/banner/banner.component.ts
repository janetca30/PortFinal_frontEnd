import { Component, Input } from '@angular/core';
import { persona } from 'src/app/model/persona';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() personaData?: persona;

  showTitle(){
    const el = document.querySelector('#heroText');
    el?.classList.remove('hidetext', 'opacity-0');
  }

  ngOnInit(){
    setTimeout(this.showTitle, 200)
  }


}
