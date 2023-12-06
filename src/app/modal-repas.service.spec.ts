import { TestBed } from '@angular/core/testing';

import { ModalRepasService } from './modal-repas.service';

describe('ModalRepasService', () => {
  let service: ModalRepasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalRepasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
