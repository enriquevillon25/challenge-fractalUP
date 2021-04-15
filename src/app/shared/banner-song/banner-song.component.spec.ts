import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSongComponent } from './banner-song.component';

describe('BannerSongComponent', () => {
  let component: BannerSongComponent;
  let fixture: ComponentFixture<BannerSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
