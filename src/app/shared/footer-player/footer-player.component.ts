import { Component, OnInit, Input, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'Footer-Player',
  templateUrl: './footer-player.component.html',
  styleUrls: ['./footer-player.component.scss']
})
export class FooterPlayerComponent implements OnInit {
  @Input() song: any;
  play:boolean = false;
  audio: any;
  @ViewChildren('volumen')volumen: any;
  constructor() { 

  }

  ngOnInit(): void {
    this.audio = new Audio();
    console.log('audio', this.audio);
    
  }
  playMusic(item:any){
    this.audio.src= item.preview;
    console.log(item)
    this.audio.play();
    this.play= !this.play;
    console.log(this.audio)
    console.log(this.volumen)
  }
  pauseMusic(){
    this.audio.pause();
    this.play=!this.play;
  }
  nextMusic(item:any){
    this.audio.volume= this.audio.volume-0.1;
   
  }
  muted(){
    this.audio.muted= !this.audio.muted;
    console.log(this.audio.volume)
  }
}
