import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class UtilService {

  report: any;
  constructor(

    private translateService: TranslateService
  ) { }

  translate(str) {
    const currentLang = this.translateService.currentLang;
    const returnValue = this.translateService.translations[currentLang][str];
    if (returnValue === undefined) {
      return this.translateService.translations.en_merch[str];
    } else {
      return returnValue;
    }
  }
  setReport(data) {
    this.report = data;
  }

  getReport() {
    return this.report;
  }

  getCurrencyCode() {
    return environment.general.code;
  }

  getCurrecySymbol() {
    return environment.general.symbol;
  }
}
