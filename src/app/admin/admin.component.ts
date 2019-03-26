import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AdminService } from './admin.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
