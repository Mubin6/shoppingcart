import { TestBed, inject } from '@angular/core/testing';

import { PhotogalleryService } from './photogallery.service';

describe('PhotogalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotogalleryService]
    });
  });

  it('should be created', inject([PhotogalleryService], (service: PhotogalleryService) => {
    expect(service).toBeTruthy();
  }));
});
