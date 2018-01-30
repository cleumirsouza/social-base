import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  onFilter() {
    this._location.go('/filter');
  }

  onBack(event) {
    this._location.back();
  }
}
