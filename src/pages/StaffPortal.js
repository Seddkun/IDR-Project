import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";

const StaffPortal = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Manejar el login exitoso
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Staff Portal</h2>
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default StaffPortal;
