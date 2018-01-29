import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Repository } from "../interfaces/repository";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitApiService{
  private username = 'cleumirsouza';
  private client_id = '59f2328c57ac6ab80b1d';
  private client_secret='1cab2a80ad2ece6c95c5787d6f7f158854ae9d12';

  constructor(private _http:Http){}
  
  getUser(){
    let url = `https://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this._http.get(url)
      .map(data => data.json());
  }

  getRepos(){
    let url = `https://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this._http.get(url)
      .map((data) => {
        return data.json();
      });
  }

  getPublicRepos(nameRepo) {
    let url = `https://api.github.com/search/repositories?q=${nameRepo}`;
    return this._http.get(url)
      .map((data) => {  
        return data.json();
      });
  }
}