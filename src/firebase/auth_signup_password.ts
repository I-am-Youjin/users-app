import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const FirebaseSignUp = (
  email: string,
  password: string,
  username: string
) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: any) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: username,
      });

      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
