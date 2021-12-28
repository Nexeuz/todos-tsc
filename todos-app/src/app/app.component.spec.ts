import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    const todoServiceStub = {
      todos: [
        {
          status: 'pending',
          description: 'Bananas'
        },
        {
          status: 'pending',
          description: 'Tomatoes'
        },
        {
          status: 'pending',
          description: 'Pinapple'
        }
      ]
    };
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [ { provide: TodoService, useValue: todoServiceStub } ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const todosService = TestBed.inject(TodoService);
    expect(app).toBeTruthy();
    expect(todosService).toBeTruthy();
  });

  it(`should have as title 'todos-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todos-app');
  });

  it(`should have render tomatoes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const todosService = TestBed.inject(TodoService);

    todosService.todos[0].description = 'test';
    fixture.detectChanges();

  });

 /**  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('todos-app app is running!');
  }); */
});
