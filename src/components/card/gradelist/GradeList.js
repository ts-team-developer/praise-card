import * as React from 'react';
import { Card, CardContent, Typography, Grid, Chip, CardHeader, Avatar } from '@mui/material'
import { red } from '@mui/material/colors';
import { usePcStyles, useMobileStyles } from "../../../styles/styles"
import { useMediaQuery } from "@material-ui/core";
import { deepOrange, deepPurple,green, pink } from '@mui/material/colors';

export default function GradeList(props) {
  // Style 관련 CSS
  const isMobile = useMediaQuery("(max-width: 600px)");
  const classes = usePcStyles();
  const mobile = useMobileStyles();
  let color = null;

  if(props.list.CATEGORY == '긍정') {
      color = pink[500] ;
  }else if(props.list.CATEGORY == '열정') {
      color = deepPurple[500];
  } else if(props.list.CATEGORY == '창의') {
      color = deepOrange[500]
  } else if(props.list.CATEGORY == '약속') {
      color = green[500];
  } 

  return (
    <React.Fragment>
      {/* <Grid item xs={12} md={ props.list.QUARTER.split('년도')[0] >= 2022 ? 6 : 12}> */}
      <Grid item xs={12} md={6}>
      <Card variant="outlined" severity="success" key={props.SEQ} className={classes.p0} >    
        <CardHeader  avatar={  <Avatar sx={{ bgcolor: color , fontSize : '1rem' }} aria-label="recipe">{props.list.CATEGORY == '' ? ':)' : props.list.CATEGORY }</Avatar> }
             title={props.list.RECEIVER} 
             subheader={props.list.QUARTER}/>
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx = {{textOverflow : 'ellipsis', overflow : 'hidden', wordBreak : 'break-word'}}>
              {props.list.CONTENT.split('\n').map((line) => { return (<p>{line}</p>)  })  } 
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment> )
}