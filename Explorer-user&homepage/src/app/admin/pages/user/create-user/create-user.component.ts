import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  loading=false;
  userForm = new FormGroup(
    {
      id: new FormControl('',[Validators.required]),
      firstname: new FormControl(),
      lastname: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      hobbies: new FormControl(),
      personaldetails: new FormControl(),
      profilephoto: new FormControl(),
      signup:new FormGroup(
        {
          email:new FormControl(),
          password:new FormControl(),
          userroles:new FormGroup(
            {
              roleid:new FormControl()
            }

          )
        }
      )
    
    }
  );
  constructor(public service:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  get fc(){
    return this.userForm.controls;
  }

  onSubmit(){
this.loading=true;
    const use=JSON.stringify(this.userForm.value);
    this.service.addUser(use).subscribe((data:any) =>{
      console.log(data);
      this.router.navigateByUrl('/admin');
    }).add(()=>this.loading=false);

  }

}
