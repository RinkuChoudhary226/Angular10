import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alertmsg: Boolean = false;
  constructor(private objservice: UserService, private router: ActivatedRoute) { }
  submitted = false;
  signupform = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileno: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });
  ngOnInit() {
    this.objservice.getUserDetailsById(this.router.snapshot.params.id).subscribe(userdata => {
      console.dir(userdata);
      this.signupform = new FormGroup({
        firstname: new FormControl(userdata['firstname'], Validators.required),
        lastname: new FormControl(userdata['lastname'], Validators.required),
        password: new FormControl(userdata['password'], [Validators.required]),
        email: new FormControl(userdata['email'], [Validators.required, Validators.email]),
        mobileno: new FormControl(userdata['mobileno'], [Validators.required, Validators.maxLength(10)]),
      });
    });
  }
  get firstname() { return this.signupform.get('firstname') }
  get lastname() { return this.signupform.get('lastname') }
  get password() { return this.signupform.get('password') }
  get email() { return this.signupform.get('email') }
  get mobileno() { return this.signupform.get('mobileno') }

  submitSignup() {
    this.submitted = true;
    if (this.signupform.invalid) {
      return false;
    }
    else {
      if (this.router.snapshot.params.id > 0) {
        this.objservice.updateUser(this.router.snapshot.params.id, this.signupform.value).subscribe((msg) => {
          console.log("Data Saved Successfully!..");
        });
      }
      else {
        this.objservice.insertUser(this.signupform.value).subscribe((msg) => {
          console.log("Data Saved Successfully!..");
        });
      }
      this.alertmsg = true;
      this.signupform.reset({});

      window.location.href = '/users';
      this.submitted = false;
    }
  }
  // submit() {
  //   console.log(this.signupform.value);
  // }

}
