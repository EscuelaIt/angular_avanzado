import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-home',
  template: `
  <blockquote>
    <p><em>Hello!! Angular is amazing.</em></p>
  </blockquote>
  <div>
  <canvas name="bar-chart"
            baseChart
            [datasets]="chartData"
            [labels]="chartLabels"
            [options]="chartOptions"
            legend="true"
            chartType="bar"></canvas>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabels;
  public chartData: any[] = [];

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData() {
    this.chartLabels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'];
    this.chartData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Expense' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Income' }
    ];
  }

}
