import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ChartNoAxesCombined, ClipboardList, Clock3, Users } from 'lucide';
import * as echarts from 'echarts';
import { IconComponent } from '../../shared/icon/icon';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, IconComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements AfterViewInit, OnDestroy {
  @ViewChild('spendingChart')
  chartElement!: ElementRef<HTMLDivElement>;

  private chart?: echarts.ECharts;
  private resizeObserver?: ResizeObserver;
  private readonly theme = inject(ThemeService);

  constructor() {
    effect(() => this.updateChartTheme(this.theme.isDark()));
  }

  readonly metrics = signal([
    { label: 'Total Spend', value: 2450000, kind: 'money', change: '+12.5%', icon: ChartNoAxesCombined },
    { label: 'Active Suppliers', value: 248, kind: 'number', change: '+8.2%', icon: Users },
    { label: 'Purchase Orders', value: 1284, kind: 'number', change: '+15.3%', icon: ClipboardList },
    { label: 'Pending Approvals', value: 24, kind: 'number', change: 'Action needed', icon: Clock3 },
  ]);

  readonly orders = signal([
    {
      id: 'PO-1042',
      supplier: 'Gulf Technology Co.',
      amount: 125000,
      date: '2026-10-08',
      status: 'Pending',
    },
    {
      id: 'PO-1041',
      supplier: 'Riyadh Industrial Supplies',
      amount: 84500,
      date: '2026-10-07',
      status: 'Approved',
    },
    {
      id: 'PO-1040',
      supplier: 'Eastern Trading Group',
      amount: 42000,
      date: '2026-10-06',
      status: 'Processing',
    },
    {
      id: 'PO-1039',
      supplier: 'Saudi Office Solutions',
      amount: 18750,
      date: '2026-10-05',
      status: 'Approved',
    },
    {
      id: 'PO-1038',
      supplier: 'National Logistics',
      amount: 67500,
      date: '2026-10-04',
      status: 'Rejected',
    },
  ]);

  readonly statuses = [
    { label: 'Approved', count: 720 },
    { label: 'Processing', count: 320 },
    { label: 'Pending', count: 180 },
    { label: 'Rejected', count: 64 },
  ];

  ngAfterViewInit(): void {
    this.chart = echarts.init(this.chartElement.nativeElement);

    const dark = this.theme.isDark();
    const chartColor = dark ? '#a9c1ce' : '#54788b';
    this.chart.setOption({
      tooltip: {
        trigger: 'axis',
        backgroundColor: dark ? '#253745' : '#ffffff',
        borderColor: dark ? '#4a5c6a' : '#ccd0cf',
        textStyle: { color: dark ? '#ccd0cf' : '#253745', fontFamily: 'Inter, sans-serif' },
        axisPointer: {
          type: 'line',
          lineStyle: { color: dark ? '#4a5c6a' : '#9ba8ab', type: 'dashed' },
        },
        valueFormatter: (value: number) =>
          new Intl.NumberFormat('en-SA', {
            style: 'currency',
            currency: 'SAR',
            maximumFractionDigits: 0,
          }).format(value),
      },
      grid: { left: 16, right: 18, top: 28, bottom: 12, containLabel: true },
      xAxis: {
        type: 'category',
        data: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        axisTick: { show: false },
        axisLine: { lineStyle: { color: dark ? '#4a5c6a' : '#ccd0cf' } },
        axisLabel: { color: dark ? '#9ba8ab' : '#526572', fontFamily: 'Inter, sans-serif' },
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 600000,
        interval: 150000,
        axisLabel: {
          formatter: (value: number) => (value === 0 ? '0' : `${value / 1000}k`),
          color: dark ? '#9ba8ab' : '#526572',
          fontFamily: 'Inter, sans-serif',
        },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: { color: dark ? '#253745' : '#e9edee', type: 'dashed' },
        },
      },
      series: [
        {
          name: 'Spend (SAR)',
          type: 'line',
          smooth: 0.35,
          showSymbol: true,
          symbol: 'circle',
          symbolSize: 7,
          itemStyle: {
            color: chartColor,
            borderColor: dark ? '#11212d' : '#ffffff',
            borderWidth: 2,
          },
          lineStyle: { color: chartColor, width: 3, cap: 'round' },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: dark ? 'rgba(169, 193, 206, 0.28)' : 'rgba(84, 120, 139, 0.22)' },
                { offset: 1, color: dark ? 'rgba(169, 193, 206, 0.015)' : 'rgba(84, 120, 139, 0.015)' },
              ],
            },
          },
          emphasis: {
            focus: 'series',
            itemStyle: { borderWidth: 3, shadowBlur: 8, shadowColor: `${chartColor}66` },
          },
          data: [285000, 345000, 310000, 420000, 390000, 485000],
        },
      ],
    });

    this.resizeObserver = new ResizeObserver(() => this.chart?.resize());

    this.resizeObserver.observe(this.chartElement.nativeElement);
  }

  private updateChartTheme(dark: boolean): void {
    if (!this.chart) return;

    const muted = dark ? '#9ba8ab' : '#526572';
    const chartColor = dark ? '#a9c1ce' : '#54788b';
    this.chart.setOption({
      tooltip: {
        backgroundColor: dark ? '#253745' : '#ffffff',
        borderColor: dark ? '#4a5c6a' : '#ccd0cf',
        textStyle: { color: dark ? '#ccd0cf' : '#253745' },
        axisPointer: {
          lineStyle: { color: dark ? '#4a5c6a' : '#9ba8ab' },
        },
      },
      xAxis: {
        axisLine: { lineStyle: { color: dark ? '#4a5c6a' : '#ccd0cf' } },
        axisLabel: { color: muted },
      },
      yAxis: {
        axisLabel: { color: muted },
        splitLine: { lineStyle: { color: dark ? '#253745' : '#e9edee' } },
      },
      series: [
        {
          itemStyle: {
            color: chartColor,
            borderColor: dark ? '#11212d' : '#ffffff',
          },
          lineStyle: { color: chartColor },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: dark ? 'rgba(169, 193, 206, 0.28)' : 'rgba(84, 120, 139, 0.22)' },
                { offset: 1, color: dark ? 'rgba(169, 193, 206, 0.015)' : 'rgba(84, 120, 139, 0.015)' },
              ],
            },
          },
        },
      ],
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.chart?.dispose();
  }
}
