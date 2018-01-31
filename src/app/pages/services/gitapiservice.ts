import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitApiService{
  // User profile to fill home page
  private username = 'cleumirsouza';
  // both are necessary to prevent forbidden response from git api 
  private client_id = '59f2328c57ac6ab80b1d';
  private client_secret='1cab2a80ad2ece6c95c5787d6f7f158854ae9d12';

  constructor(private _http:Http){}
  
  /*
    Description:
      Method to get user profile from value [username]
    response:
      json
  */
  getUser(){
    let url = `https://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this._http.get(url)
      .map((data) => {
        return data.json()
      }
    );
  }

  /*
    Description:
      Method to get all repositories filtered by name
    param:
      nameRepo: string that should have name of the repository
    response:
      json
  */
  getRepos(){
    let url = `https://api.github.com/users/${this.username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this._http.get(url)
      .map((data) => {
        return data.json();
      });
  }

  /*
    Description:
      Method to get all repositories filtered by name
    param:
      nameRepo: string that should have name of the repository
    response:
      json
  */
  getPublicRepos(nameRepo) {
    let url = `https://api.github.com/search/repositories?client_id=${this.client_id}&client_secret=${this.client_secret}&q=${nameRepo}`;
    return this._http.get(url)
      .map((data) => {  
        return data.json();
      });
  }
}