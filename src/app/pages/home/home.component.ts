import { Component, OnInit } from '@angular/core';
import { GitApiService } from "../services/gitapiservice";
import { HeaderComponent } from "../shared/components/header/header.component";
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GitApiService]
})
export class HomeComponent implements OnInit {
  user: any;
  imgPath: string;
  repositories: any;

  displayedColumns = ['repository', 'language', 'forks'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _gitApiService: GitApiService) {
    
    this._gitApiService.getUser().subscribe(data => {
      this.user = data;
      this.imgPath = data.avatar_url;
    });
    
    this._gitApiService.getUser().subscribe(data => {
      this.repositories = data;
    });
  }

  ngOnInit() {
  }
}

export interface Element {
  repository: string;
  language: string;
  forks: number;
}

const ELEMENT_DATA: Element[] = [
  {repository: 'Hydrogen', language: 'JavaScript', forks: 34345},
];