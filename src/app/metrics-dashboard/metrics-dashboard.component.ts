import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-metrics-dashboard',
  templateUrl: './metrics-dashboard.component.html',
  styleUrls: ['./metrics-dashboard.component.sass']
})
export class MetricsDashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Primary', 'Secondary', 'Tertiary'],
        datasets: [{
          label: '1st',
          data: [12, 6, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderWidth: 1
        },
        {
          label: '2nd',
          data: [2, 4, 8],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: true
          }]
        }
      }
    });
  }

}
