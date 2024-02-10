import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface MyComponentProps {}

export const MyComponent: React.FC<MyComponentProps> = () => {
    const chartOptions = {
        // Define your chart options here
        chart: {
            type: 'line',
        },
        series: [
            {
                name: 'Series 1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
    };

    return (
        <div>
            <ReactApexChart
                options={chartOptions}
                series={chartOptions.series}
                type="line"
                height={350}
            />
        </div>
    );
};

export default MyComponent;
