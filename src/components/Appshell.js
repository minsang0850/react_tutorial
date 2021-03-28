import React from 'react';
import { withStyles } from '@material-ui/core/styles';   //for style
import AppBar from '@material-ui/core/AppBar';           //for Navigation bar
import Drawer from '@material-ui/core/Drawer';             
import MenuItem from '@material-ui/core/MenuItem';      //for each item(home, QnA,...)
import IconButton from '@material-ui/core/IconButton';  
import MenuIcon from '@material-ui/icons/Menu';

const styles={
    root: {
        flesGrow: 1,
    },
    menuButton:{
        marginRight: 'auto' //왼쪽 정렬
    }
}

class AppShell extends React.Component{
    constructor(props){
        super(props);
            this.state={
                toggle: false
            };      
        }
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render() {
        const {classes}=this.props;
        return(
            <div className={classes.root}>
                <AppBar position="static"> 
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                </AppBar>
                <Drawer open={this.state.toggle}>
                    <MenuItem onClick={this.handleDrawerToggle}>Home</MenuItem>
                    <MenuItem onClick={this.handleDrawerToggle}>Home 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(AppShell);