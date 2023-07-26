
import Button from "react-bootstrap/Button";


import { useFirebase } from "../context/Firebase";

const SignOutPage= () =>{
  const firebase = useFirebase();

  return (
    <div className="container mt-5">
      <Button onClick={firebase.logout} variant="danger">
        SignOut
      </Button>
    </div>
  );
}

export default SignOutPage;
