import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEntryComponent } from './skills-entry.component';

describe('SkillsEntryComponent', () => {
  let component: SkillsEntryComponent;
  let fixture: ComponentFixture<SkillsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
