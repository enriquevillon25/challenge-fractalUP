import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  entrityResults: any;
  songSelected:any;
  playing: boolean=false;
  constructor(private albumsService: AlbumsService) { 
    
  }

  ngOnInit(): void {
    this.albumsService.searchAlbums('adele').subscribe((response:any)=>{
        this.entrityResults = response.data;
        this.songSelected= this.entrityResults[0];
        console.log(this.entrityResults);
    }) 
  } 
  playSong(item:any){
      this.songSelected= item;
      this.playing = !this.playing;
      console.log(this.playing)
  }
  sendSearch(i:any){
    this.albumsService.searchAlbums(i).subscribe((response:any)=>{
      this.entrityResults = response.data;
      this.songSelected= this.entrityResults[0];
      console.log(this.entrityResults);
  }) 
  }
}
