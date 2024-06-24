import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteResumenComponent } from './cliente-resumen.component';

describe('ClienteResumenComponent', () => {
  let component: ClienteResumenComponent;
  let fixture: ComponentFixture<ClienteResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteResumenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
