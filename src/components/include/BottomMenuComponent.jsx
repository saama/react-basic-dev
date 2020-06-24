import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HelpIcon from '@material-ui/icons/Help';
import EmailIcon from '@material-ui/icons/Email';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class BottomMenuComponent extends Component {

    state = {
        value: 0,
        pathMap: [
          '/',
          '/people',
          '/map',
          '/about',
          '/subscribe'
        ]
      };

      componentWillReceiveProps(newProps) {
        const {pathname} = newProps.location;
        const {pathMap} = this.state;
    
        const value = pathMap.indexOf(pathname);

        console.log(newProps.location);
    
        if (value > -1) {
          this.setState({
            value
          });
        }
      }

    //   handleChange = (event, value) => {
    //     // this.setState({ value });
    //   };

    render() {
        const {value, pathMap} = this.state;
        return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <BottomNavigation
              value={value}
            //   onChange={this.handleChange}
              showLabels
              className="nav primary"
            >
              <BottomNavigationAction label="Panoramas" icon={<LanguageIcon />} component={Link} to={pathMap[0]} />
              <BottomNavigationAction label="Members" icon={<GroupIcon />} component={Link} to={pathMap[1]} />
              <BottomNavigationAction label="Shop" icon={<ShoppingBasketIcon />} component={Link} to={pathMap[2]} />
              <BottomNavigationAction label="About" icon={<HelpIcon />} component={Link} to={pathMap[3]} />
              <BottomNavigationAction label="Subscribe" icon={<EmailIcon />} component={Link} to={pathMap[4]} />
            </BottomNavigation>
        </Container>
        </React.Fragment>
        )
    }
}

export default withRouter(BottomMenuComponent);