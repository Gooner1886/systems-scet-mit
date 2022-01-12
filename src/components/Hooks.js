import axios from 'axios';
import { useEffect, useState } from 'react';


function CheckSignIn(callback)
{
    let token=localStorage.getItem('token');
    let url="https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD_IpvEOmupo-tfIcWtkJ7nQSeLfuqiiwQ";

    useEffect(()=>{
    axios.post(url,{idToken:token})                                 //GET USERNAME CORRESPONDING TO TOKEN
    .then((response)=>{callback(response.data.users[0].localId)})
    .catch((err)=>{
        console.log("Not Logged In")}
    )},[url]);
}


function useLoginInterface(props){

    let email=props.email;
    let password=props.password;

    const authData = {
            email: email,
            password: password,
            returnSecureToken: true
    }

    let url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_IpvEOmupo-tfIcWtkJ7nQSeLfuqiiwQ";

    axios.post(url,authData)                                                    //PERFORM AUTH REQUEST
    .then((response)=>{
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);                 //EXPIRES IN 1 HR
        localStorage.setItem('token', response.data.idToken);                   
        localStorage.setItem('expirationDate', expirationDate);
        console.log("LOGGED IN");
    })
    .catch((err)=>{
        console.log(err.response.data.error.message);
    });
}

export {useLoginInterface,CheckSignIn};