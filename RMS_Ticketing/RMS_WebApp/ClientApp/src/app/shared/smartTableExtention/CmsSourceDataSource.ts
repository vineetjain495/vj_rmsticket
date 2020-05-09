//import { Http } from '@angular/http';
//import { any } from '@angular/http/src/interfaces';
//import { HttpParams } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalDataSource } from 'ng2-smart-table';
import { ServerSourceConf } from './server-source.config';
import { getDeepFromObject } from './helpers';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

export class CmsServerDataSource extends LocalDataSource {

  protected conf: ServerSourceConf;

  protected lastRequestCount: number = 0;

  constructor(protected http: HttpClient, conf: ServerSourceConf) {
    super();

    this.conf = conf;

    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }

  count(): number {
    return this.lastRequestCount;
  }

  getElements(): Promise<any> {
    return this.requestElements().pipe(map(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);

      return this.data;
    })).toPromise().catch(res => {
      //alert('error');
    });
  }

  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  protected extractDataFromResponse(res: any): Array<any> {
    const rawData = res;
    const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

    if (data instanceof Array) {
      return data;
    }

    throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
  }

  /**
   * Extracts total rows count from the server response
   * Looks for the count in the heders first, then in the response body
   * @param res
   * @returns {any}
   */
  protected extractTotalFromResponse(res: any): number {
    //if (res.headers.has(this.conf.totalKey)) {
    //    return +res.headers.get(this.conf.totalKey);
    //} else {
    const rawData = res;
    return getDeepFromObject(rawData, this.conf.totalKey, 0);
    //}
  }

  protected requestElements(): Observable<any> {
    return this.http.post(this.conf.endPoint, this.createRequestOptions());
  }

  protected createRequestOptions(): any {
    let requestOptions: any = {};

    requestOptions = this.addSortRequestOptions(requestOptions);
    requestOptions = this.addFilterRequestOptions(requestOptions);
    return this.addPagerRequestOptions(requestOptions);
  }

  public createRequestOptionsForDownload(): any {
    let requestOptions: any = {};
    requestOptions = this.addSortRequestOptions(requestOptions);
    return this.addFilterRequestOptions(requestOptions);
  }

  protected addSortRequestOptions(requestOptions: any): any {
    if (this.sortConf) {
      this.sortConf.forEach((fieldConf) => {
        requestOptions[this.conf.sortFieldKey] = fieldConf.field;
        requestOptions[this.conf.sortDirKey] = fieldConf.direction.toUpperCase();
      });
    }
    return requestOptions;
  }

  protected addFilterRequestOptions(requestOptions: any): any {
    if (this.filterConf.filters) {
      this.filterConf.filters.forEach((fieldConf: any) => {
        if (fieldConf['search']) {
          requestOptions[this.conf.filterFieldKey.replace('#field#', fieldConf['field'])] = fieldConf['search'];
        }
      });
    }
    return requestOptions;
  }

  protected addPagerRequestOptions(requestOptions: any): any {
    if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
      requestOptions[this.conf.pagerPageKey] = this.pagingConf['page'];
      requestOptions[this.conf.pagerLimitKey] = this.pagingConf['perPage'];
    }
    return requestOptions;
  }
}
