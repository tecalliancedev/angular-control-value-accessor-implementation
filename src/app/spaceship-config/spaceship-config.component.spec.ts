import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipConfigComponent } from './spaceship-config.component';

describe('SpaceshipConfigComponent', () => {
  let component: SpaceshipConfigComponent;
  let fixture: ComponentFixture<SpaceshipConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
