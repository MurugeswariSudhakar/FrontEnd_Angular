import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[];

  constructor(private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit():void {
    this.listUser();
  }
  listUser(){
    console.log("Entering users component");
    this.route.paramMap.subscribe(()=>{  

    this.userService.getUserList().subscribe(
      data=>{
        this.users=data;
      });
    });

    console.log(this.users);
  }



deleteUser(id:number){
  const user=this.users.find(x=>x.id===id);
  if(!user)return;
  user.isDeleting=true;
  this.userService.delete(id)
  .subscribe(() => this.users = this.users.filter(x => x.id !==id));

}
}