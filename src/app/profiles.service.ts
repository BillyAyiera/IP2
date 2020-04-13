import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private client_id = "6779ef20e75817b79602";
  private client_secret ="ad4c6b7589be0fd3568fd4ca0e496211600066f3";
  constructor(private http:HttpClient) { 
    this.username = "BillyAyiera";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}