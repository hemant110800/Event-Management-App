import {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/acess_token";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { method: "post", action: "/logout" });
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, tokenDuration);
    //with this approach , every time browser refresh then timer will start with new time again it will chk for 1 hr no matter
    // already we have exccedded.
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
