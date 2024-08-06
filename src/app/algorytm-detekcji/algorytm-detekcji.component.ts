import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-algorytm-detekcji',
  templateUrl: './algorytm-detekcji.component.html',
  styleUrls: ['./algorytm-detekcji.component.scss']
})
export class AlgorytmDetekcjiComponent {

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  
  constructor(private dialog: MatDialog) {

  }

  counter = 0;

  ngOnInit(){
    

    setInterval(() => {         //replaced function() by ()=>

      let video: any = document.getElementById("my_video_1");

      if (video.currentTime>= 3 && video.currentTime < 4)
        this.openAlertDialog("UWAGA! Incydent. Kamera nr 1") ;
    }, 1000);
  }
  
  openAlertDialog(msg: string) {
    const dialogRef = this.dialog.open(DialogTextComponent,{
      data:{
        message: msg,
        buttonText: {
          cancel: 'Ok'
        }
      },
    });
  }
  
  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
}
