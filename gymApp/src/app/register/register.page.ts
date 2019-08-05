import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import * as PouchDB from 'pouchdb/dist/pouchdb';
import { DatabaseService, User } from '../services/database.service';
import { Storage } from '@ionic/storage';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../models/mustMatch';
import { IUser } from '../models/user.model';
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  invalid: boolean;
  submitted = false;

  regForm: FormGroup;
  regUser: IUser;

  private username;
  private firstName;
  private lastName;
  private email; 
  private password;

  private newUser: IUser = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController,
              private userService: UserService,
              private fb: FormBuilder,
              private auth: AuthService,
              private alertCtrl: AlertController) { }


  ngOnInit() {
    this.regForm = this.fb.group({
      email:['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });

    console.log(this.newUser);
    console.log(this.auth.user);
  }


  get f() { return this.regForm.controls; }

  signUp(){
    this.submitted = true;
    if (this.regForm.valid){
      this.auth.registerUser(this.email, this.password, this.firstName,
                             this.lastName, this.username);
      let alert = this.alertCtrl.create({
        message: 'Login Successful',
        buttons: ['OK']
      }).then(alert => alert.present());
      this.newUser.email = this.regForm.get('email').value;
      this.newUser.firstName = this.regForm.get('firstName').value;
      this.newUser.lastName = this.regForm.get('lastName').value;
      this.newUser.password = this.regForm.get('password').value;
      this.newUser.username = this.regForm.get('username').value;
      //this.auth.updateUserData(this.newUser);
      //this.auth.currentUser = this.newUser;
      console.log(this.newUser);
      this.navCtrl.navigateForward('login');
    } else{
      let alert = this.alertCtrl.create({
        subHeader: 'Registration Failed',
        message: 'Go Back and Complete all Required Fields',
        buttons: ['OK']
      }).then(alert => alert.present());
      return;    
    }
    console.warn(this.regForm.value);
  }

}
