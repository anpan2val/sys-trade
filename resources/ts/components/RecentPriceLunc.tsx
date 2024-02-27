import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import {useEffect, useState} from 'react';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function RecentPriceLunc() {

    const [luncPrice, setLuncPrice] = useState('Loading...');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/cmc');
            const data = await response.json();
            console.log(data);
            setLuncPrice(data['data_LUNC']['price']);
        }
        fetchData();

    }, []);

    return (
        <React.Fragment>
            <Title>Lunc Price</Title>
            <Typography component="p" variant="h4">
                ${luncPrice}
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
