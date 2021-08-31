import { AppBar,Toolbar,Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        backgroundColor:"black"
    },
    navlink:{
        color:"white",
        textDecoration:"none",
        marginRight:20,
        fontSize:15,
        justifyContent:"flex-end"
        
    },
    navlinkU:{
        color:"white",
        textDecoration:"none",
        marginRight:20,
        fontSize:25,
    },
    toolbar:{
        display:"flex",
        justifyContent:"flex-end"
    },
    list:{
        fontSize:37,
        height:0,
        marginTop:10,
        marginLeft:20,
        textDecoration:"none",
        color:"orange"

    }
})
const NavBar = () => {
    const classes = useStyle();
    return (
        <div>
            <AppBar className={classes.header} position="static">
            <NavLink className={classes.list} to="/" exact>List</NavLink>
                <Toolbar className={classes.toolbar}>
                    
                    <NavLink className={classes.navlink} to="/" exact>Home</NavLink>
                    <NavLink className={classes.navlink} to="add" exact>AddUser</NavLink>
                    <NavLink className={classes.navlink} to="all" exact>AllUser</NavLink>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
