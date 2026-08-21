import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';

  displayedFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
  handleSubmit() {
  alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  profileForm = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  });
}