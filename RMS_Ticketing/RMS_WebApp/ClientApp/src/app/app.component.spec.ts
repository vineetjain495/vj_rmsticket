import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('component: AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent]
        })

    }));

   
    it('should load the app component template with data', async(() => {
        
        TestBed.compileComponents()
            .then(() => {
                
                fixture = TestBed.createComponent(AppComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
                expect(component.name).toBe('Angular');
            });
        //const debugEl = fixture.debugElement;
        //const h1 = debugEl.nativeElement.querySelector('h1');
        //expect(h1.textContent).toEqual('Hello Angular');

        
    }));
});