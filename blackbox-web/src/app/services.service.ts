import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private jsonUrl = 'assets/services.json';

  constructor(private http: HttpClient) {}

  // Récupère la liste complète des services
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.jsonUrl);
  }

  // Récupère un service spécifique à partir de son slug
  getServiceBySlug(slug: string): Observable<Service | undefined> {
    return this.getServices().pipe(
        map(services => services.find(service => service.slug === slug))
    );
  }
}
