import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHome: boolean;
  constructor(private _location: Location) { }

  ngOnInit() {
    /*
      Description:
        flag to enable and disable route between pages
    */
    this.isHome  = this._location.path() !== '/filter' ? true : false;
  }
}
