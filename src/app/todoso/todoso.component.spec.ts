import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosoComponent } from './todoso.component';

describe('TodosoComponent', () => {
  let component: TodosoComponent;
  let fixture: ComponentFixture<TodosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
