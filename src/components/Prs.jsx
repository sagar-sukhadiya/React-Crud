import React, { useState } from 'react'
import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { addUser } from '../Services/api';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
const initialValues = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(5).max(50).label('Name'),
})


const Adduser = () => {
    const useStyle = makeStyles({
        container:{
           display:"flex",
           justifyContent:"center",
        }
    })
    const classes = useStyle();

    const [user, setUser] = useState(initialValues);
    const { name, username, email, phone } = user;
    const history = useHistory();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
    }

    const onSubmit = async () => {
        await addUser(user);
        history.push('./all')
    }


    return (

        <div>

            <div><h1 style={{ display: 'flex', justifyContent: "center", marginTop: 100 }}>Add component</h1></div>
            <Card>
                <CardContent className="container">
                    <Grid cointainer spacing={1}>
                        <Grid xs={12} sm={6}  >  
                            <form>
                                <TextField label="Name" fullWidth/>
                                <TextField label="UserName" fullWidth/>
                                <TextField label="Email" type="email" fullWidth/>
                                <TextField label="Phone Number" fullWidth/>
                            </form>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>


        </div>


    )
}

export default Adduser
