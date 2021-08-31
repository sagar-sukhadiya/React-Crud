import { TableCell, TableHead,Table, TableBody, TableRow, Button } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { getUsers , deleteUser} from '../Services/api'
import { makeStyles } from '@material-ui/core'
import {Link } from 'react-router-dom'

const Alluser = () => {

    const useStyle = makeStyles({
        table:{
            width:'90%',
            margin: '50px 0 0 70px'
        },
        thead:{
            '& > *':{
                background:'#553D67',
                color:'white',
                fontSize:"1rem"
            }
        },
        button:{
            color:'white',
            background:'#116466'
        }
    })
    const classes = useStyle();

    const [users,setUsers] = useState([])
    
    useEffect(() => {
        getAllUSers();
        
    }, [])


    const getAllUSers = async() =>{
       const responce = await getUsers();
       console.log(responce);
       setUsers(responce.data);
    }

    const delteData = async(id) =>{
        await deleteUser(id);
        getAllUSers();

    }
    return (
        <div>
            <h1 style={{display:'flex' , justifyContent:"center"}}>List User</h1>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email Id</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Operation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { 
                    users.map(user => (
                        <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" className={classes.button} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant="contained" style={{marginLeft:5 , color:"white", background:"#501B1D"}}
                            onClick={()=>{delteData(user.id)}}>Delete</Button>
                        </TableCell>

                    </TableRow>
                    ))
                }
                   
                </TableBody>
            </Table>
        </div>
    )
}

export default Alluser;
