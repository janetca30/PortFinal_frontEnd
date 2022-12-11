import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onblogin:EventEmitter<any>=new EventEmitter();


constructor(){

}

toggleSidebar(): void{
  this.onblogin.emit();
}
ngOnInit(): void {}
}