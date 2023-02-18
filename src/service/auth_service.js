import {
  firebaseAuth,
  githubProvider,
  googleProvider,
  facebookProvider,
} from "./firebase";

class AuthService {
  login(providerName) {
    console.log(1)
    const autoProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(autoProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) onUserChanged(user.uid);
      else {
        onUserChanged(null);
      }
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      case "Facebook":
        return facebookProvider;
      default:
        throw new Error(`not supported provider:${providerName}`);
    }
  }
}

export default AuthService;
