declare module 'react-plotly.js' {
  import { Component } from 'react';
  import Plotly from 'plotly.js';

  interface PlotParams {
    data: Plotly.Data[];
    layout: Partial<Plotly.Layout>;
    frames?: Plotly.Frame[];
    config?: Partial<Plotly.Config>;
    onInitialized?: (
      figure: Readonly<{
        data: Plotly.Data[];
        layout: Partial<Plotly.Layout>;
        frames?: Plotly.Frame[];
      }>,
      graphDiv: HTMLDivElement
    ) => void;
    onUpdate?: (
      figure: Readonly<{
        data: Plotly.Data[];
        layout: Partial<Plotly.Layout>;
        frames?: Plotly.Frame[];
      }>,
      graphDiv: HTMLDivElement
    ) => void;
    onPurge?: (
      figure: Readonly<{
        data: Plotly.Data[];
        layout: Partial<Plotly.Layout>;
        frames?: Plotly.Frame[];
      }>,
      graphDiv: HTMLDivElement
    ) => void;
    onError?: (error: Error) => void;
    useResizeHandler?: boolean;
    style?: React.CSSProperties;
    className?: string;
  }

  class Plot extends Component<PlotParams> {}
  export default Plot;
}
