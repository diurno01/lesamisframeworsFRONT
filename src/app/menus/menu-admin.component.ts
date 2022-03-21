import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html'
})
export class MenuAdminComponent implements OnInit {

  idUser: string = {} as string;
 

  constructor(
    private activatedRoute: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.idUser = this.activatedRoute.snapshot.params['id'];  

  }

}
