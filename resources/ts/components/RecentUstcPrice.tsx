import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useEffect, useState } from 'react';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function RecentUstcPrice() {

    const [ustcPrice, setUstcPrice] = useState('Loading...');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc');
            const data = await response.json();
            console.log(data);
            setUstcPrice(data['data']['price']);
        }
        fetchData();

    }, []);

    return (
        <React.Fragment>
            <Title>USTC Price</Title>
            <Typography component="p" variant="h4">
                ${ustcPrice}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>

            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}
