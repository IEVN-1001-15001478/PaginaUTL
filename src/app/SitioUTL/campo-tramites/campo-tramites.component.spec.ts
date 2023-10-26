import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTramitesComponent } from './campo-tramites.component';

describe('CampoTramitesComponent', () => {
  let component: CampoTramitesComponent;
  let fixture: ComponentFixture<CampoTramitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoTramitesComponent]
    });
    fixture = TestBed.createComponent(CampoTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
