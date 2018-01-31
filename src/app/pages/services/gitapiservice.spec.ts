import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { GitApiService } from './gitapiservice';

describe('GitApiService', ( )=> {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GitApiService]
    });
  });

  it('Service should be created', inject([GitApiService], (service: GitApiService) => {
    expect(service).toBeTruthy();
  }));

  it('Service should have getUser function', inject([GitApiService], (service: GitApiService) => {
    expect(service.getUser).toBeTruthy();
  }));

  /*
    check necessary functions
  */
  it('Service should have getUser function', inject([GitApiService], (service: GitApiService) => {
    expect(service.getUser).toBeTruthy();
  }));

  it('Service should have getRepos function', inject([GitApiService], (service: GitApiService) => {
    expect(service.getRepos).toBeTruthy();
  }));
  
  it('Service should have getPublicRepos function', inject([GitApiService], (service: GitApiService) => {
    expect(service.getPublicRepos).toBeTruthy();
  }));
  
  /*
    check api response
  */
  
  it('GetUser should response an json', inject([GitApiService], (service: GitApiService) => {    
    service.getUser().subscribe((response) => {
      expect(response.json()).toEqual({success: 'true'});
    });
  }));
  
  it('GetRepos should response an json', inject([GitApiService], (service: GitApiService) => {    
    service.getRepos().subscribe((response) => {
      expect(response.json()).toEqual({success: 'true'});
    });
  }));

  it('getPublicRepos should response an json', inject([GitApiService], (service: GitApiService) => {    
    service.getPublicRepos('social base').subscribe((response) => {
      expect(response.json()).toEqual({success: 'true'});
    });
  }));

  it('GetUser response should have name, location, email', inject([GitApiService], (service: GitApiService) => {    
    service.getUser().subscribe((response) => {
      expect(response.json().name).toEqual('Cleumir Souza');
      expect(response.json().location).toMatch('Brazil');
      expect(response.json().email).toBeTruthy();
    });
  }));

  /*
    Check user repository
  */
});