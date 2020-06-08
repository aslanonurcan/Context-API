/* eslint-disable no-unused-expressions */
import React,{useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import {MainContext} from '../context/MainContext';
import TextField from '@material-ui/core/TextField';

function Home() {
    const [user,setUser] = useContext(MainContext);
    console.log('state: ',user)
    return (
        <div>
            <h1>Home Page</h1>
            {
                user.map( us => (
                    <h1>{us.email}</h1>
                ))
            }
        </div>
    );
}

export default Home;