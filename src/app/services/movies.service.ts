import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { movie } from "src/app/interfaces/movie";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  url: string = environment.url;

  constructor(private _http: HttpClient) {}

  getData(): Observable<movie[]> {
    return this._http.get<movie[]>(this.url);
  }
}
