import { Component, OnInit } from '@angular/core';
import { NavbarService } from '.././services/navbar.service';
import {ActivatedRoute,Params,Router,NavigationEnd} from '@angular/router';
 import 'rxjs/add/operator/first';
import {Categorie} from '../ModelBinding/categorie';
import {Journal} from '../ModelBinding/journal';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: any;
  journals: any;
  constructor(private service: NavbarService,private route: Router) { 
    this.service = service;
    this.route = route;
  }
  
 selectedJournalId: string = null;
 
 onSelect(journal) {
        this.selectedJournalId = journal._id;
    }
  ngOnInit() {
    this.getCategories();
    this.getJournaux();
 }

  getJournaux() {
    console.log("journal from component navbar");
    this.journals = [] ; 
    this.service.getjournaux().subscribe(
      data => this.journals = data
    );
  }


  getCategories() {
    console.log("categorie from component navbar");
    this.categories = [] ; 
    this.service.getCategories().subscribe(
      data => this.categories = data
    );
  }

}

