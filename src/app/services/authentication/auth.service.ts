import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  loginWithSocialNetwork (provider) {
    this.afAuth.auth.signInWithRedirect(provider);
  }

  loginWithGoogle () {
    this.loginWithSocialNetwork(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook () {
    this.loginWithSocialNetwork(new firebase.auth.FacebookAuthProvider());
  }

  logout () {
    this.afAuth.auth.signOut();
  }
}
