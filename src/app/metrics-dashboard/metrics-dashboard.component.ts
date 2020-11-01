import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Metrics } from '../core/models/custom-metrics';
import { CustomMetricsService } from "../core/services/custom-metrics.service";

@Component({
  selector: 'app-metrics-dashboard',
  templateUrl: './metrics-dashboard.component.html',
  styleUrls: ['./metrics-dashboard.component.sass']
})
export class MetricsDashboardComponent implements OnInit {

  metricsResults: Metrics[] = [];
  chartLabels = [];
  chartDataset = []
  chartConfigs = {
    type: 'bar',
    data: {
      labels: this.chartLabels,
      datasets: this.chartDataset
    },
    options: {
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }
  }

  constructor(private metricsService: CustomMetricsService) {
  }

  ngOnInit(): void {
    this.getMetricsResult();
  }

  getMetricsResult() {
    this.metricsService.getMetrics().subscribe({
      next: val => {
        this.metricsResults.push(val);
      },
      error: (error: any) => { console.log(error) },
      complete: () => {
        this.updateChartConfigs();
        console.log(this.chartConfigs);
        var chart = new Chart("myChart", {
          type: "polarArea",
          data: {
            datasets: [{
              data: [80, 100, 97, 98, 99.8, 97.8],
              backgroundColor: [
                "rgb(54, 162, 235, 0.5)",
                "rgb(75, 192, 192, 0.5)",
                "rgb(255, 205, 86, 0.5)",
                "rgb(255, 175, 86, 0.5)",
                "rgb(255, 145, 86, 0.5)",
              ],
              label: 'My dataset' // for legend
            }],
            labels: [
              'Type 1',
              'Type 2',
              'Type 3',
              'Type 4',
              'Type 5',
              'Others'
            ]
          },
          options: {
            responsive: true,
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Server Build Success Rate'
            },
            scale: {
              ticks: {
                beginAtZero: true
              },
              reverse: false
            },
            animation: {
              animateRotate: false,
              animateScale: true
            }
          }
        });
      }
    });
  }

  updateChartConfigs() {
    for (const metricsObject of this.metricsResults) {
      this.chartLabels.push(metricsObject.modelName);
      for (const buildStateObject of metricsObject.states) {
        let buildStateDataset = null;
        for (const i of this.chartDataset) {
          if (i.label == buildStateObject.stateName) {
            buildStateDataset = i;
          }
        }
        if (buildStateDataset) {
          buildStateDataset.data.push(buildStateObject.count);
        } else {
          this.chartDataset.push({ label: buildStateObject.stateName, data: [buildStateObject.count], backgroundColor: buildStateObject.backgroundColor })
        }
      }
    }
  }

}
