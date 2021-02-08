import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: any = "http://localhost:3000/User";
  constructor(private http: HttpClient) { }
  insertUser(data) {
    return this.http.post(this.url, data);
  }
  getUserList() {
    return this.http.get(this.url);
  }
  deleteUser(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getUserDetailsById(Id) {
    return this.http.get(`${this.url}/${Id}`)
  }
  updateUser(id, data) {
    debugger
    return this.http.put(`${this.url}/${id}`, data);
  }

}
