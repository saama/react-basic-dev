import React from 'react' ;
import { Button } from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const MyMap = ({ title,message,sendEvt }) => {
    const classes = useStyles();
    return (
    <div>
      <div id="map" style={{ width: "50%", height: "360px" }}></div>
      <div><span>{title}</span></div>
      <div><span>{message}</span></div>
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
            onClick={sendEvt}
        >
          SEND
      </Button>
    </div>
    ) ;
  } ;
  
  export default MyMap ;