import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'cupcake-somemodel',
  templateUrl: './somemodel.component.html',
  styleUrls: ['./somemodel.component.scss']
})
export class SomemodelComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  title: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}

}
