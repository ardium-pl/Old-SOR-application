import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { NavigationEnd, Router, RouterEvent, RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;
  modalOpened = false;
  isLogged = false;

  constructor(private dialog: MatDialog,
    private router: Router,
    private observer: BreakpointObserver,
    private auth: AuthService
  ) { 
    console.log("constructor")
  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        message: 'Okienko modalne na starcie z informacjami',
        buttonText: {
          cancel: 'Ok'
        }
      },
    });
    this.modalOpened = true;
  }

  ngAfterViewInit()
  {
    console.log("ngAfterViewInit")
  }

  logout() {
    this.isLogged = false;
    this.auth.logout();
    this.router.navigate(['login']);
  }

  navigate() {
    console.log("ngOnDestroy")
    console.log(this.modalOpened.toString())
    localStorage.setItem('modal', this.modalOpened.toString());

    this.router.navigateByUrl('');
  }

  callAfterLogin()
  {
    console.log("callAfterLogin");
    this.ngOnInit();
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
    console.log(this.modalOpened.toString())
    localStorage.setItem('modal', this.modalOpened.toString());
  }
  ngOnInit() {    
    if (this.auth.isAuthenticatedUser()) {
      this.isLogged = true;
      console.log("ngOnInit")
      console.log(localStorage.getItem('modal'))
      this.modalOpened = localStorage.getItem('modal') == "true" ? true : false;
      this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
        if (screenSize.matches) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      });

      // if (!this.modalOpened)
      //   this.openAlertDialog();
    }
  }
}
