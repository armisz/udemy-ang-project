import {Component,} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  onSave() {
    this.dataStorageService.storeRecipes();
  }

  onLoad() {
    this.dataStorageService.loadRecipes();
  }

  onLogout() {
    this.authService.signOut();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
