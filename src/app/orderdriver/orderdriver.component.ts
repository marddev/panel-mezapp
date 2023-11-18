import { Component, OnInit } from '@angular/core';
import { ApisService } from '../services/apis.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilService } from "src/app/services/util.service";
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orderdriver',
  templateUrl: './orderdriver.component.html',
  styleUrls: ['./orderdriver.component.scss']
})
export class OrderdriverComponent implements OnInit {
  id: any;
  grandTotal: any;
  orders: any = [];
  serviceTax: any;
  status: any;
  time: any;
  total: any;
  uid: any;
  address: any;
  restName: any;
  deliveryAddress: any;
  paid: any;
  restPhone: any;
  coupon: boolean = false;
  dicount: any;
  dname: any;
  restCover: any;
  username: any;
  userpic: any;
  userAddress: any;
  refund: boolean;
  payKey: any;
  city: any = '';
  cities: any;
  dummy = Array(50);
  drivers: any = [];
  driver: any;
  dummyDrivers: any = [];
  driversByCity: any =  [];
  driverToken: any;
  constructor(
    private api: ApisService,
    private util: UtilService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService,
    private navCtrl: Location
  ) {
    this.route.queryParams.subscribe(data => {
      console.log(data);
      if (data && data.id) {
        this.id = data.id;
        this.getOrder();
        this.getUsers();
            this.getCity();
          
      }
    });
  }
  getOrder() {
    this.spinner.show();
    console.log("idd",this.id)
    this.api.getOrderById(this.id).then(data => {
      this.spinner.hide();
      console.log(data);
      if (data) {
        this.grandTotal = data.grandTotal;
        this.orders = JSON.parse(data.order);
        this.serviceTax = data.serviceTax;
        this.status = data.status;
        this.time = data.time;
        if (data && data.dId && data.dId.fullname) {
          this.dname = data.dId.fullname || '';
        }
        this.username = data.uid.fullname || '';
        this.userpic = data.uid && data.uid.cover ? data.uid.cover : 'assets/icon.png';
        this.userAddress = data.address.address;
        this.restCover = data.vid.cover;
        this.total = data.total;
        this.address = data.vid.address;
        this.restName = data.vid.name;
        this.deliveryAddress = data.address.address;
        this.paid = data.paid;
        console.log('this', this.orders);
        this.coupon = data.appliedCoupon;
        this.dicount = data.dicount;
        if (data && data.paykey && data.paid !== 'paypal') {
          this.refund = true;
          this.payKey = data.paykey;
        } else {
          this.refund = false;
        }
      }
    }).catch(error => {
      this.spinner.hide();
      console.log(error);
    });
  }

  ngOnInit() {
  }
  getDate(date) {
    return moment(date).format('llll');
  }

  refundIt() {
    console.log('id', this.id, this.refund, this.payKey);
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate('to reject and refund this order?'),
      backdrop: false,
      background: 'white',
      confirmButtonText: this.api.translate('Reject & Refund'),
      cancelButtonText: this.api.translate('Cancel'),
      showConfirmButton: true,
      showCancelButton: true,
      icon: 'question'
    }).then((data) => {
      console.log(data);
      if (data && data.value) {
        console.log('->delete');
        this.spinner.show();
        this.api.updateOrderStatus(this.id, 'rejected').then((data: any) => {
          const param = {
            charge: this.payKey,
          };
          this.api.httpPost('https://api.stripe.com/v1/refunds', param).subscribe((data) => {
            console.log(data);
            Swal.fire({
              title: this.api.translate('Success'),
              text: this.api.translate('Order refund successfully'),
              icon: 'success',
            });
            this.navCtrl.back();
          }, error => {
            console.log(error);
            this.spinner.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
              this.error(error.error.error.message);
              return false;
            }
            this.error(this.api.translate('Something went wrong'));
          });
        }).catch(error => {
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        });
      }

    });

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

  reject() {
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate('to reject this order?'),
      backdrop: false,
      background: 'white',
      confirmButtonText: this.api.translate('Reject'),
      cancelButtonText: this.api.translate('Cancel'),
      showConfirmButton: true,
      showCancelButton: true,
      icon: 'question'
    }).then((data) => {
      console.log(data);
      if (data && data.value) {
        console.log('->delete');
        this.spinner.show();
        this.api.updateOrderStatus(this.id, 'rejected').then((data: any) => {
          this.spinner.hide();
          Swal.fire({
            title: this.api.translate('Success'),
            text: this.api.translate('Order rejected successfully'),
            icon: 'success',
          });
          this.navCtrl.back();
        }).catch(error => {
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        });
      }

    });
  }

  getCity() {
    this.api.getCities().then(data => {
      console.log(data);
      this.cities = data;
      this.city = data[0].id;
      this.changeDrivers(this.city);
      this.dummy = [];
    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });
  }


  getUsers() {
    this.drivers = [];
    this.dummyDrivers = [];
    this.driversByCity = [];
    this.api.getUsers().then((data) => {
      
      console.log('users data', data);
      data.forEach(element => {
        if (element.type === 'delivery') {
          this.drivers.push(element);
          this.dummyDrivers.push(element);
        }
      });
      console.log(this.drivers);
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  getCurrency() {
    return this.api.getCurrecySymbol();
  }

  changeDrivers(city){
      console.log("Drivers",this.drivers)
      console.log("city",this.city)
    this.driversByCity = []
    this.drivers.forEach(element => {
        if (element.city === city && element.isActive) {
          this.driversByCity.push(element);
          
        }
        
        
      });
      setTimeout(()=>{
          if(this.driversByCity.length>0){
            console.log(this.driversByCity)
            this.driver = this.driversByCity[0].id 
            this.driverToken = this.driversByCity[0].fcm_token
          }
      },500)
  }


  setDriver() {
      
    const param = {
        driverId: this.driver,
        status: "accepted"
      };
      const value = "accepted";
      
      console.log(param)
      this.api
        .updateOrder(this.id, param)
        .then(data => {
          
          const parm = {
            current: "busy"
          };
          this.api
            .updateProfile(this.driver, parm)
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.log(error);
            });
          if (this.drivers[0] && this.drivers[0].fcm_token !== "") {
            this.api
              .sendNotification2(
                "New Order Received ",
                "New Order",
                this.driverToken
              )
              .subscribe(
                data => {
                  console.log("send notifications", data);
                },
                error => {
                  console.log(error);
                }
              );
          }
  
  
          console.log("data", data);
          const msg =
            "Your Order is " +
            value +
            " By " +
            this.restName;
          
          Swal.fire({
            title:"success",
            text: "Order status changed to " + value,
            icon: "success",
            timer: 2000,
            backdrop: false,
            background: "white"
          });
          this.navCtrl.back();
        })
        .catch(error => {
          console.log(error);
        });
  }
}
