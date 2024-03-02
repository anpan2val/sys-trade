import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useEffect, useState } from 'react';

export default function RecentPriceUstc() {

    const [ustcPrice, setUstcPrice] = useState('Loading...');
    const [cmcRank, setCmcRank] = useState('Loading...');
    const cmcPage = 'https://coinmarketcap.com/currencies/terrausd/';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc');
            const data = await response.json();
            setUstcPrice(data['data_USTC']['price']);
            setCmcRank(data['data_USTC']['cmc_rank']);
        }
        fetchData();

    }, []);

    return (
        <React.Fragment>
            <Title>USTC Info</Title>
            <Typography component="p" variant="h4">
                ${ustcPrice}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                CoinMarketCap Rank #{cmcRank}
            </Typography>
            <div>
                <Link target="_blank" color="primary" href={cmcPage}>
                    View CMC Details
                </Link>
            </div>
        </React.Fragment>
    );
}
