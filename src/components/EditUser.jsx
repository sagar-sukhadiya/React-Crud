import React,{useState,useEffect} from 'react'
import { FormControl, FormGroup, InputLabel , Input, Button, makeStyles, Typography} from '@material-ui/core';
import { editUser  ,updateUser} from '../Services/api';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
const intialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
}
const EditUser = () => {
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
    const {id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        loadData();
    },[])

    const loadData = async() => {
        const resp = await editUser(id);
        setUser(resp.data);
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user)
    }

    const UpdateUserDetail = async() => {
        await updateUser(id,user);
        history.push('/all')
    }
    
    
    return (
        
        <div>
            
            <FormGroup className={classes.container}>
            <Typography variant="h4" style={{marginTop:100}}>Edit User</Typography>
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

               <Button variant="contained" color="secondary" onClick={()=>UpdateUserDetail()} className={classes.button}>Edit User</Button>
            </FormGroup>
        </div>
    )
}

export default EditUser;
