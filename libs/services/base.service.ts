import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePaginate} from "../models";

export class BaseService<T> {
  protected constructor(
    public readonly url: string,
    public readonly http: HttpClient,
  ) {
  }

  pagination(params?: any): Observable<ResponsePaginate<T> | any> {
    return this.http.get<ResponsePaginate<T> | any>(this.url, { params });
  }

  getAll(params?: any): Observable<T[]> {
    return this.http.get<T[]>(this.url, { params });
  }

  getOne(id: any): Observable<T> {
    return this.http.get<T>(this.url + `/${id}`);
  }

  addOne(props: any): Observable<T> {
    return this.http.post<T>(this.url, props);
  }

  addMany(body: any): Observable<any> {
    return this.http.post<any>(
      this.url + `/multiple/creation`,
      body
    );
  }

  update(id: any, body: Partial<any>): Observable<T> {
    return this.http.patch<T>(this.url + `/${id}`, body);
  }

  updateMany(
    body: any,
    method?: 'put' | 'patch' | 'post'
  ): Observable<any> {
    return this.http.request<any>(
      method ?? 'post',
      this.url + `/multiple/updation`,
      { body }
    );
  }

  delete(id: number, params?: any): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`, { params });
  }

  deleteMany(body: any): Observable<any> {
    return this.http.post<any>(
      this.url + `/multiple/deletion`,
      body
    );
  }
}
