import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerSongComponent } from './banner-song/banner-song.component';
import { FooterPlayerComponent } from './footer-player/footer-player.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, BannerSongComponent, FooterPlayerComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    HeaderComponent,
    BannerSongComponent,
    FooterPlayerComponent
  ]
})
export class SharedModule { }
