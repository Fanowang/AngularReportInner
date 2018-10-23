import { Component, OnInit } from '@angular/core';
import { Report } from '../report';
import { REPORTS } from '../mock-reports';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports = REPORTS;
  report: Report = {
    id: 1,
    name: 'repor1'
  };

  selectedReport: Report;
  onSelect(report: Report): void {
    this.selectedReport = report;
  }


  constructor() { }

  ngOnInit() {
  }

}
