import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApisService } from 'src/app/services-venue/apis.service';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';
import { UtilService } from 'src/app/services/util.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  foods: any = [];
  categories: any = [];
  dummy = Array(50);
  constructor(
    private router: Router,
    private api: ApisService,
    private util: UtilService,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService
  ) {

  }

  ngOnInit() {
    this.getFoods();
  }
  ionViewWillEnter() {
    this.getFoods();
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

  getFoods() {
    this.api.getVenueCategories(localStorage.getItem('uid')).then((data) => {
      console.log(data);
      this.dummy = [];
      if (data) {
        this.categories = data;
        this.api.getFoods(localStorage.getItem('uid')).then((data) => {
          console.log(data);
          if (data) {
            this.foods = data;
          }
        }, error => {
          console.log(error);
          this.dummy = [];
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        }).catch(error => {
          this.dummy = [];
          console.log(error);
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        });
      }
    }, error => {
      console.log(error);
      this.dummy = [];
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.dummy = [];
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    });

  }
  addnew() {
    this.router.navigate(['/add-new-foods']);
  }

  foodsInfo(item) {
    console.log(item);
    const navData: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };
    this.router.navigate(['venue','add-new-foods'], navData);
  }

  getCurrency() {
    return this.util.getCurrecySymbol();
  }

  showPanelCreated(){
    const navData: NavigationExtras = {
      queryParams: {
        register: true
      }
    };
    this.router.navigate(['venue','add-new-foods'],navData);
  }
}
