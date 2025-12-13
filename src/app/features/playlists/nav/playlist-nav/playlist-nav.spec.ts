import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistNav } from './playlist-nav';

describe('PlaylistNav', () => {
  let component: PlaylistNav;
  let fixture: ComponentFixture<PlaylistNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
