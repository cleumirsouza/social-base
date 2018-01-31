import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GitApiService } from "../services/gitapiservice";
import { NgModel } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-filter-repository',
  templateUrl: './filter-repository.component.html',
  styleUrls: ['./filter-repository.component.css'],
  providers: [GitApiService]
})
export class FilterRepositoryComponent implements OnInit {
  panelOpenState: boolean = false;
  reposNoResult: boolean = false;
  value: string = '';
  dataSource = new MatTableDataSource();
  displayedColumns = ['owner', 'name', 'language', 'forks'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private _gitApiService: GitApiService ) { 
  }
  
  /*
    Description:
      Method to get public repositories by string from textbox and fill table.
  */
  onSearch() {
    this.panelOpenState = false;
    this._gitApiService.getPublicRepos(this.value).subscribe(data => {
      if (data.items.length) {
        this.reposNoResult = false;
        this.dataSource = new MatTableDataSource(data.items);
        this.dataSource.paginator = this.paginator;
        this.panelOpenState = true;
      } else {
        this.reposNoResult = true;
        this.panelOpenState = true;
      }
    });
  }

  ngOnInit() {
    this.reposNoResult = true;
  }

  /*
    Description:
      Method to filter data on the table.
  */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
