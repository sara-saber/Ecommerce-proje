import { User } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display:boolean=false;
  user=new User();
  constructor(private s:UserService) { }

  ngOnInit(): void {
  }

  show(d:boolean){
    this.display=d;
  }

}
