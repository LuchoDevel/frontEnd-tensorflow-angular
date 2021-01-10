import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public titlePage: string | undefined;
  public menuApplications: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.initValues();
  }

  public initValues(): void {
    this.titlePage = 'Content applications with TensorFlow';
    this.menuApplications = [
      { appName: 'Recognition Objects',
        path: 'Recognition'
      },
      {
        appName: 'Auto take photo',
        path: 'autoPhoto'
      }
    ];

  }

}
