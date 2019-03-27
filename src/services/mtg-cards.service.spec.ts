import { TestBed, inject } from '@angular/core/testing';

import { MtgCardsService } from './mtg-cards.service';

describe('MtgCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MtgCardsService]
    });
  });

  it('should be created', inject([MtgCardsService], (service: MtgCardsService) => {
    expect(service).toBeTruthy();
  }));
});
