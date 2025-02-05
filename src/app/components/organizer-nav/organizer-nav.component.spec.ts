import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerNavComponent } from './organizer-nav.component';

describe('OrganizerNavComponent', () => {
  let component: OrganizerNavComponent;
  let fixture: ComponentFixture<OrganizerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
