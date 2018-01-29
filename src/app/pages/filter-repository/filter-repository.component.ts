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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  panelOpenState: boolean = false;
  reposNoResult: boolean = false;
  dataSource = new MatTableDataSource();
  displayedColumns = ['owner', 'name', 'language', 'forks'];
  value = '';

  constructor( private _gitApiService: GitApiService ) { 
  }
  
  onSearch() {
    this.panelOpenState = false;
    this._gitApiService.getPublicRepos(this.value).subscribe(data => {
      if (data.items.length) {
        console.log(data.items);
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
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
