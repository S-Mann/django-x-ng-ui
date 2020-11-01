import { Injectable } from '@angular/core';
import { Metrics } from '../models/custom-metrics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomMetricsService {
  mockMetrics: Metrics[];

  constructor() {
    this.mockMetrics = [
      {
        modelName: "Type A", states: [
          { stateName: "DEPLOYED", count: 5, backgroundColor: 'rgba(255, 99, 132, 0.2)' },
          { stateName: "FIRMWARE_UPDATE", count: 8, backgroundColor: 'rgba(54, 162, 235, 0.2)' },
          { stateName: "BIOS_UPDATE", count: 6, backgroundColor: 'rgba(180, 0, 225, 0.2)' }
        ]
      },
      {
        modelName: "Type B", states: [
          { stateName: "DEPLOYED", count: 5, backgroundColor: 'rgba(255, 99, 132, 0.2)' },
          { stateName: "CREATED", count: 4, backgroundColor: 'rgba(0, 162, 0, 0.2)' }
        ]
      },
      {
        modelName: "Type C", states: [
          { stateName: "DEPLOYED", count: 15, backgroundColor: 'rgba(255, 99, 132, 0.2)' }
        ]
      },
      {
        modelName: "Type D", states: [
          { stateName: "FIRMWARE_UPDATE", count: 8, backgroundColor: 'rgba(54, 162, 235, 0.2)' },
          { stateName: "BIOS_UPDATE", count: 6, backgroundColor: 'rgba(180, 0, 225, 0.2)' }
        ]
      },
    ];
  }

  getMetrics(): Observable<Metrics> {
    return new Observable<Metrics>(subscriber => {
      setTimeout(() => {
        this.mockMetrics.forEach(i => subscriber.next(i));
        subscriber.complete();
      }, 1000);
    });
  }
}
