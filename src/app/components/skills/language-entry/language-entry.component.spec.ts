import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageEntryComponent } from './language-entry.component';

describe('LanguageEntryComponent', () => {
  let component: LanguageEntryComponent;
  let fixture: ComponentFixture<LanguageEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
