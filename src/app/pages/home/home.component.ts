import { Component, OnInit } from '@angular/core';
import { GitApiService } from "../services/gitapiservice";
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GitApiService]
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private _gitApiService: GitApiService) {
  }

  ngOnInit() {
    this._gitApiService.getUser().subscribe(data => {
      this.user = data;
    });
  }
}