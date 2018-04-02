import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD_ZXyIP9vELBUvnfeFbitt8_gFXDxokb4",
      authDomain: "udemy-2a85f.firebaseapp.com",
    });
  }
}
