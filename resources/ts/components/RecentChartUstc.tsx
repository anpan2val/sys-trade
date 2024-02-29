import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import {LineChart, axisClasses} from '@mui/x-charts';
import {ChartsTextStyle} from '@mui/x-charts/ChartsText';
import Title from './Title';
import {useEffect, useState } from 'react';

// Generate Sales Data
function createData(
    time: string,
    amount?: number,
): { time: string; amount: number | null } {
    return {time, amount: amount ?? null};
}


export default function RecentChartUstc() {
    const theme = useTheme();
    const [ustcChartData, setUstcChartData] = useState([]);
    const [ustcMaxPrice, setUstcMaxPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc_ustc');
            const data = await response.json();

            let max_price = 0;
            const tmp_data = [];
            for (let i = 0; i < data.length; i++) {
                tmp_data.push(createData(data[i]['timestamp'], data[i]['data']['price']));

                if (max_price <= data[i]['data']['price']) {
                    max_price = data[i]['data']['price'];
                }
            }
            setUstcMaxPrice(max_price);
            setUstcChartData(tmp_data);
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <Title>USTC</Title>
            <div style={{width: '100%', flexGrow: 1, overflow: 'hidden'}}>
                <LineChart
                    dataset={ustcChartData}
                    margin={{
                        top: 16,
                        right: 20,
                        left: 70,
                        bottom: 30,
                    }}
                    xAxis={[
                        {
                            scaleType: 'point',
                            dataKey: 'time',
                            tickNumber: 2,
                            tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
                        },
                    ]}
                    yAxis={[
                        {
                            label: '',
                            labelStyle: {
                                ...(theme.typography.body1 as ChartsTextStyle),
                                fill: theme.palette.text.primary,
                            },
                            tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
                            max: ustcMaxPrice,
                            tickNumber: 5,
                        },
                    ]}
                    series={[
                        {
                            dataKey: 'amount',
                            showMark: false,
                            color: theme.palette.primary.light,
                        },
                    ]}
                    sx={{
                        [`.${axisClasses.root} line`]: {stroke: theme.palette.text.secondary},
                        [`.${axisClasses.root} text`]: {fill: theme.palette.text.secondary},
                        [`& .${axisClasses.left} .${axisClasses.label}`]: {
                            transform: 'translateX(-25px)',
                        },
                    }}
                />
            </div>
        </React.Fragment>
    );
}
