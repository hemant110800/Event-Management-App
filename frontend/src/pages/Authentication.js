import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();
  console.log(request);
  //how to take mode value from route, query parameter we cannot use hooks in function
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }
  const auth_data = {
    email: data.get("email"),
    password: data.get("password")
  };
  // console.log(auth_data);

  const resp = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(auth_data)
  });

  console.log(resp);
  if (resp.status === 422 || resp.status === 401) {
    //this we can access thorugh useActionData hook which will give this data
    return resp;
  }

  if (!resp.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }
  console.log(resp);
  const resData = await resp.json();
  const token = resData.token;

  console.log(token);
  const token_expiration = new Date();
  token_expiration.setHours(token_expiration.getHours()+1);
  
  localStorage.setItem("token", token);
  localStorage.setItem("token_duration",token_expiration.toISOString());

  return redirect("/");
}
