import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({  // style 요소 선언
    margin: {
      margin: theme.spacing(3),
    }
  }));

const PeoInfo = ({ info, onRemove }) => {
    const classes = useStyles();
  
  const { name, age, id } = info;
  return (
    <div>
      <div>
        <b>{name}</b>
      </div>
      <div>
        <b>{age}</b>
      </div>
      {/* <button onClick={() => onRemove(id)}>삭제</button> */}
        <Button variant="contained" color="primary" className={classes.margin} onClick={() => onRemove(id)}>
          삭제
        </Button>
    </div>
  );
};

export default PeoInfo;