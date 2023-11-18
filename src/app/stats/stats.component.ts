import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { ApisService } from '../services/apis.service';
import * as moment from 'moment';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  rest: any = [];
  restId: any;
  from: any;
  to: any;
  allOrders: any = [];
  restOrder: any = [];
  totalAmount: any = 0;
  commisionAmount: any = 0;
  toPay: any = 0;
  constructor(
    private api: ApisService,
    private toastyService: ToastyService,
  ) {
    this.getRest();
    this.api.getAllOrders().then(data => {
      console.log(data);
      this.allOrders = data;
    });
  }

  ngOnInit() {
  }

  ExportToExcel()
    {
      $('.data-hidden').show();

      var elt = document.getElementsByClassName('table')[0];
      const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(elt);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, 'ReportsGoby.xlsx');
      $('.data-hidden').hide();
    }
    
  getRest() {
    this.api.getVenues().then((data) => {
      console.log('rest data', data);
      this.rest = data;
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }
  getStats() {
    console.log(this.from);
    console.log(this.to);
    if (this.restId === '' || !this.restId) {
      this.error(this.api.translate('Please select restaurants'));
      return false;
    }
    if (!this.from || !this.to) {
      this.error(this.api.translate('Please select valid date'));
    }

    console.log(this.restId);
    const restOrders = this.allOrders.filter(x => x.restId === this.restId && x.status === 'delivered');


    this.totalAmount = 0;
    this.commisionAmount = 0;

    const from = new Date(this.from).getTime();
    const to = new Date(this.to).getTime();
    console.log('from =->thi', from);
    console.log('to=>', to);
    this.restOrder = [];
    restOrders.forEach(element => {
      let testDate = new Date(element.time).getTime();
      console.log('testdate', testDate);
      if (testDate >= from && testDate <= to) {
        this.restOrder.push(element);
      }
    });
    console.log('orders', this.restOrder);
    this.restOrder.forEach(element => {
      console.log('hope');
      this.totalAmount = this.totalAmount + parseFloat(element.total);
      let commision = (parseFloat(element.total) * 20) / 100;
      this.commisionAmount = this.commisionAmount + commision;
    });
    this.totalAmount = parseFloat(this.totalAmount).toFixed(2);
    this.commisionAmount = parseFloat(this.commisionAmount).toFixed(2);
    this.toPay = this.totalAmount - this.commisionAmount;
    console.log('this.totalAmount', this.totalAmount);
    console.log('comm', this.commisionAmount);
    console.log('to pay', this.toPay);
  }
  error(message) {
    const toastOptions: ToastOptions = {
      title: this.api.translate('Error'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.error(toastOptions);
  }
  success(message) {
    const toastOptions: ToastOptions = {
      title: this.api.translate('Success'),
      msg: message,
      showClose: true,
      timeout: 2000,
      theme: 'default',
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      }
    };
    // Add see all possible types in one shot
    this.toastyService.success(toastOptions);
  }

  getCommisions(total) {
    return ((parseFloat(total) * 20) / 100).toFixed(2);
  }

  donwloadPDF() {

  }
  today() {
    moment.locale('es')
    return moment().format('ll');
  }
  getDate(date) {
    moment.locale('es')
    return moment(date).format('ll');
  }
  getName() {
    moment.locale('es')
    return this.restOrder[0].vid.name + '_' + moment(this.from).format('DDMMYYYY') + '_' + moment(this.to).format('DDMMYYYY');
  }
  getCurrency() {
    return this.api.getCurrecySymbol();
  }

  getParcialCost(total, comission){
    return total-comission
  }

  async getDeliveryName(id){
    console.log("item",id)
    return await this.getProfile(id);
  }

  getProfile(id){
    this.api.getProfile(id).then((data) => {
      console.log('rest data', data);
      console.log(data)
      return data.fullname;
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }
}
