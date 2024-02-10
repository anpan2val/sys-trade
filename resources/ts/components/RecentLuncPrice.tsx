import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function RecentLuncPrice() {
  return (
    <React.Fragment>
      <Title>LUNC Price</Title>
      <Typography component="p" variant="h4">
        $0.001999
      </Typography>
      {/*<Typography color="text.secondary" sx={{ flex: 1 }}>*/}
      {/*  on 15 March, 2019*/}
      {/*</Typography>*/}
      {/*<div>*/}
      {/*  <Link color="primary" href="#" onClick={preventDefault}>*/}
      {/*    View balance*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </React.Fragment>
  );
}
