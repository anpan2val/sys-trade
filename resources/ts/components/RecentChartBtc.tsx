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

export default function RecentChartBtc() {
    const theme = useTheme();
    const [btcChartData, setBtcChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc_btc');
            const data = await response.json();

            const tmp_data = [];
            for (let i = 0; i < data.length; i++) {
                tmp_data.push(createData(data[i]['timestamp'], data[i]['data']['price']));
            }
            setBtcChartData(tmp_data);
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <Title>Today</Title>
            <div style={{width: '100%', flexGrow: 1, overflow: 'hidden'}}>
                <LineChart
                    dataset={btcChartData}
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
                            label: 'Price ($)',
                            labelStyle: {
                                ...(theme.typography.body1 as ChartsTextStyle),
                                fill: theme.palette.text.primary,
                            },
                            tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
                            max: 62000,
                            tickNumber: 3,
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
