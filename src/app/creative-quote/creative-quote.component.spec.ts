import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeQuoteComponent } from './creative-quote.component';

describe('CreativeQuoteComponent', () => {
  let component: CreativeQuoteComponent;
  let fixture: ComponentFixture<CreativeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
