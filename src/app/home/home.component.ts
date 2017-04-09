import { Component, OnInit } from '@angular/core';
 
import { UserService } from '../services/user.service';
import { Admin } from '../ModelBinding/admin';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    users: Admin[] = [];
 
    constructor(private userService: UserService) { }
 
    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
 
}