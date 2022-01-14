import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';

const ColumnChart = ({data, xname, yname, title, subTitle}) => {
    return (
        <ChartComponent palettes={['#035ff0']} border={ { width: 2, color: '#000000' }} title={title} subTitle={subTitle} chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
            <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName={xname} animation={{ enable: true, duration: 1200, delay: 100 }} yName={yname} type='Column' name='Citations' marker={{dataLabel:{visible:true}}}/>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

const LineChart = ({data, xname, yname, title, subTitle}) => {
    return (
        <ChartComponent palettes={['#035ff0']} border={ { width: 2, color: '#000000' }} title={title} subTitle={subTitle} chartArea={ { background: 'skyblue', width: '90%' }} primaryXAxis={ { valueType: 'Category' }} width={String(window.screen.width / 2)} height={String(window.screen.height / 2)}>
            <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName={xname} animation={{ enable: true, duration: 1200, delay: 100 }} yName={yname} type='Column' name='Citations' marker={{dataLabel:{visible:true}}}/>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};