/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuranAppService } from './QuranApp.service';

describe('Service: QuranApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuranAppService]
    });
  });

  it('should ...', inject([QuranAppService], (service: QuranAppService) => {
    expect(service).toBeTruthy();
  }));
});
