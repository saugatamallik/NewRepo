import { TestBed, async } from '@angular/core/testing';
import { CpgAdminComponent } from './cpg.admin.component';
describe('CpgAdminComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CpgAdminComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CpgAdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'cpg-admin'`, async(() => {
    const fixture = TestBed.createComponent(CpgAdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cpg-admin');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CpgAdminComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to cpg-admin!');
  }));
});
