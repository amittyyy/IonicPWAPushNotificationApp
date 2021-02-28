import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  token = null;

  constructor(private afMessage: AngularFireMessaging) { }

  requestPermission(){
    return this.afMessage.requestToken.pipe(
      tap(token => {
        console.log('store the token', token);
      })
    );
  }

  getMessages(){
    return this.afMessage.messages;
  }

  deleteToken(){
    if(this.token){
      this.afMessage.deleteToken(this.token);
      this.token = null;
    }
  }
}
