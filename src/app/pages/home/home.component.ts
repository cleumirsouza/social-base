import { Component, OnInit, ViewChild } from '@angular/core';
import { GitApiService } from "../services/gitapiservice";
import { HeaderComponent } from "../shared/components/header/header.component";
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GitApiService]
})
export class HomeComponent implements OnInit {
  user: any;
  imgPath: string;
  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'language', 'forks'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _gitApiService: GitApiService) {
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngOnInit() {
    this._gitApiService.getUser().subscribe(data => {
      this.user = data;
      this.imgPath = data.avatar_url;
    });
    
    this._gitApiService.getRepos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
  }


}