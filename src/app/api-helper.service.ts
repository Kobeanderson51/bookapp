import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  titleSearchResponse: any;

  constructor(private http: HttpClient) { }

  getApiUrl(): string {
    return 'https://openlibrary.org/search.json?q=';
  }

  getApiWithQuery(query: string): string {
    return this.getApiUrl() + query;
  }

  getCachedTitleSearchResponse() {
    return this.titleSearchResponse;
  }

  setCachedTitleSearchResponse(response: any) {
    this.titleSearchResponse = response;
  }

  searchBook(title: string) {
    return this.http.get(this.getApiWithQuery(title));
  }
}
