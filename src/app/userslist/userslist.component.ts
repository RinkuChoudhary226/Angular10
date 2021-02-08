import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  userdata: any = [];


  constructor(private objData: UserService) {
    debugger
    objData.getUserList().subscribe(data => {
      console.dir(data);
      this.userdata = data;
    });
  }
  ngOnInit() {

  }
  DeleteUser(id) {
    this.userdata.splice(id - 1, 1);
    this.objData.deleteUser(id).subscribe(data => {
      console.dir('User Deleted Successfully!...');
    })
  }
  EditUser(id) {

  }

}
