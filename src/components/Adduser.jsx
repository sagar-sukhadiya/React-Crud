import React,{useState} from 'react'
import { FormControl, FormGroup, InputLabel , Input, Button, makeStyles, Typography} from '@material-ui/core';
import { addUser } from '../Services/api';
import { useHistory } from 'react-router';
const intialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}
const Adduser = () => {
    const useStyle = makeStyles({
        container:{
            width:"40%",
            margin:'3% 0 0 30%',
            '& > *' : {
                marginTop:12,
            }

        },
        button:{
            width:"29%",
            marginLeft: "inherit",
            
            
        }
    })
    const classes = useStyle();
    
    const [user, setUser] = useState(intialValue);
    const {name , username, email, phone} = user ;
    const history = useHistory();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user)
    }

    const addUserDetail = async() => {
        await addUser(user);
        history.push('./all')
    }
    
    
    return (
        
        <div>
            <h1 style={{display:'flex' , justifyContent:"center"}}>Add component</h1>
            <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)}
                         name="name"
                         value={name}
                         
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)}
                           name="username"
                           value={username}
                           />
                </FormControl>

                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)}
                            name="email"
                            value={email}
                           />
                </FormControl>

                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)}
                            name="phone"
                            value={phone}/>
                </FormControl>

               <Button variant="contained" color="secondary" onClick={()=>{addUserDetail()}} className={classes.button}>Add User</Button>
            </FormGroup>
        </div>
    )
}

export default Adduser
