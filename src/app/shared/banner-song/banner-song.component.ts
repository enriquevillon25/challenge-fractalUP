import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Banner-Song',
  templateUrl: './banner-song.component.html',
  styleUrls: ['./banner-song.component.scss']
})
export class BannerSongComponent implements OnInit {
  @Input() song: any;
  constructor() { }

  ngOnInit(): void {
  }

}
