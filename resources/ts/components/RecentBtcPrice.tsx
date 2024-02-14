import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useEffect, useState } from 'react';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function RecentBtcPrice() {

    const [btcPrice, setBtcPrice] = useState('Loading...');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc');
            const data = await response.json();
            console.log(data);
            setBtcPrice(data['data']['price']);
        }
        fetchData();

    }, []);

    return (
    <React.Fragment>
      <Title>BTC Price</Title>
      <Typography component="p" variant="h4">
        ${btcPrice}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
