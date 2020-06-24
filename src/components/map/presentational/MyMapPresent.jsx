import React from 'react' ;
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Map = () => {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh' }}>
          <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </Typography>
      </Container>
      </React.Fragment>
    ) ;
  } ;
  
  export default Map ;