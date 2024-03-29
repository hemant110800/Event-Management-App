import { redirect } from "react-router";


export const getTokenDuration =() =>{
    const storedExpiredDate = localStorage.getItem("token_duration");
    const expirationDate = new Date(storedExpiredDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;

}

export const get_access_token = ()=>{
    const token = localStorage.getItem("token");

    if(!token){
        return null;
    }

    const token_duration = getTokenDuration();
    if(token_duration < 0){
        return 'EXPIRED'
    }
    return token;
}

// we will add loader to parent route and will access token values where we need in child 
export const tokenloader = () =>{
    return get_access_token();
}

export const checkAuthLoader = ()=>{
    const tok = get_access_token();
    if(!tok)
    {
        return redirect('/auth');
    }
    return null;
    //loader needs to return something ether null or some val;
}