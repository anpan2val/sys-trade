import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useEffect, useState } from 'react';

export default function RecentPriceBtc() {

    const [btcPrice, setBtcPrice] = useState('Loading...');
    const [cmcRank, setCmcRank] = useState('Loading...');
    const cmcPage = 'https://coinmarketcap.com/currencies/bitcoin/';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc');
            const data = await response.json();
            setBtcPrice(data['data_BTC']['price']);
            setCmcRank(data['data_BTC']['cmc_rank']);
        }
        fetchData();

    }, []);

    return (
    <React.Fragment>
      <Title>BTC Info</Title>
      <Typography component="p" variant="h4">
        ${btcPrice}
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
