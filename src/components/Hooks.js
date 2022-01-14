import axios from 'axios';
import { useContext, useEffect} from 'react';
import Logged from "./context"

function CheckSignIn(callback)
{
    let token=localStorage.getItem('token');
    let url="https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD_IpvEOmupo-tfIcWtkJ7nQSeLfuqiiwQ";
    const user=useContext(Logged);

    useEffect(()=>{
    axios.post(url,{idToken:token})                                 //GET USERNAME CORRESPONDING TO TOKEN
    .then((response)=>{user.setter(true);callback(response.data.users[0].localId)})
    .catch((err)=>{
        user.setter(false);
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
        window.location.reload();
        console.log("LOGGED IN");
    })
    .catch((err)=>{
        console.log(err.response.data.error.message);
        let st=err.response.data.error.message;
        st=st.replace("_"," ");
        alert(st);
    });
}


export {useLoginInterface,CheckSignIn};