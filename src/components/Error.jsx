import React from 'react'
import {makeStyles} from '@material-ui/core';
import notfound from '../Assets/Images/NotFound.jpg';
// const useStyle = makeStyles({
//     h1:{
//         display:"flex",
//         justifyContent: "center",
//         marginTop:250
//     }
// })
const Error = () => {
    // const classes = useStyle()
    return (
        
            <>
                <img src={notfound} style={{width: '55%' , margin:'65px 0 0 20%'}}/>
            </>
        
    )
}

export default Error
