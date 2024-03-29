// import { useState } from 'react';
import { Form, Link, useSearchParams, useActionData, useNavigation } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  // const [isLogin, setIsLogin] = useState(true);

  // function switchAuthHandler() {
  //   setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  // }
  const actdata = useActionData();
  
  const navigate = useNavigation(); //it will prvoide states (idle , loading and submitting based on that wecan add effects)
  const isSubmitting = navigate.state === 'submitting';

  //Instead we will switch to login or signup page based on query parameter, but how to access query parameters
  const [searchParams] = useSearchParams();
  //useSearchParams causes re-render which will update isLogin and refreshes the component based on that.
  const isLogin = searchParams.get("mode") === "login";
  // console.log('searchParams',isLogin);

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {actdata && actdata.errors && (
          <ul>
            {Object.values(actdata.errors).map(err => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {actdata && actdata.message && <p>{actdata.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          {/* <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button> */}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting?"Submitting...":'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
