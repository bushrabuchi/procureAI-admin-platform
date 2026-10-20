import { ComponentFixture, TestBed } from '@angular/core/testing';

import { afterEach, vi } from 'vitest';

import * as echarts from 'echarts';

import { Dashboard } from './dashboard';

vi.mock('echarts', () => ({
  init: vi.fn(() => ({
    setOption: vi.fn(),
    resize: vi.fn(),
    dispose: vi.fn(),
  })),
}));

describe('Dashboard chart integration', () => {
  let fixture: ComponentFixture<Dashboard>;

  const disconnect = vi.fn();

  beforeEach(async () => {
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe = vi.fn();
        disconnect = disconnect;
      },
    );

    await TestBed.configureTestingModule({
      imports: [Dashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);

    await fixture.whenStable();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('renders sample metrics and passes spend data to the chart', () => {
    expect(fixture.nativeElement.textContent).toContain('Total Spend');

    const chart = vi.mocked(echarts.init).mock.results.at(-1)!.value;

    expect(chart.setOption).toHaveBeenCalledWith(
      expect.objectContaining({
        series: [
          expect.objectContaining({
            data: [285000, 345000, 310000, 420000, 390000, 485000],
          }),
        ],
      }),
    );
  });

  it('disposes the chart and disconnects resize observation', () => {
    const chart = vi.mocked(echarts.init).mock.results.at(-1)!.value;

    fixture.destroy();

    expect(chart.dispose).toHaveBeenCalled();

    expect(disconnect).toHaveBeenCalled();
  });
});
