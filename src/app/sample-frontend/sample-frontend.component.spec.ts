import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFrontendComponent } from './sample-frontend.component';

describe('SampleFrontendComponent', () => {
  let component: SampleFrontendComponent;
  let fixture: ComponentFixture<SampleFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleFrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
