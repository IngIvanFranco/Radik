import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateradikComponent } from './createradik.component';

describe('CreateradikComponent', () => {
  let component: CreateradikComponent;
  let fixture: ComponentFixture<CreateradikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateradikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateradikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
