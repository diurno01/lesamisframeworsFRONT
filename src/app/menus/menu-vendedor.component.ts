import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-vendedor',
  templateUrl: './menu-vendedor.component.html'
})
export class MenuVendedorComponent implements OnInit {

  id: number= {} as number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
