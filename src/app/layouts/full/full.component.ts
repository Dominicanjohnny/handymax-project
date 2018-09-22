import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent  implements OnInit {

  color = 'defaultdark';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;

  public config: PerfectScrollbarConfigInterface = {};

  constructor(public router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/authentication/signup']);
    }
  }

}
