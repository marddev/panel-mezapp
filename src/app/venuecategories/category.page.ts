import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services-venue/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';
import { NgxSpinnerService } from 'ngx-spinner';
import * as $ from 'jquery';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  categories: any = [];
  category: any;
  name: any;
  dummy = Array(50);
  flag: any;
  constructor(
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    private toastyService: ToastyService,
    private spinner: NgxSpinnerService,
  ) {
    this.getCategories();
  }

  getCategories() {
    this.api.getVenueCategories(localStorage.getItem('uid')).then((data) => {
      this.dummy = [];
      console.log(data);
      if (data) {
        this.categories = data;
      }
    }, error => {
      console.log(error);
      this.dummy = [];

    }).catch(error => {
      console.log(error);
      this.dummy = [];
    });
  }
  ngOnInit() {
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

  create() {
    if (!this.name || this.name === '' ) {
      this.error(this.api.translate('Please select valid city name'));
      return false;
    }
    const id = Math.floor(100000000 + Math.random() * 900000000);
    const param = {
      uid: localStorage.getItem('uid'),
      name: this.name,
      id: id.toString(),
    };
    this.api.addVenueCategoies(param.id, param).then((data) => {
      this.api.alerts(this.api.translate('Success'), this.api.translate('Category Added'), 'success');
      $("#panelCreate").hide("slow")
      this.getCategories();
      this.name = ""
    }).catch(error => {
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    });
  }

  async edit() {
    // console.log(item);
    const param = {
      uid: localStorage.getItem('uid'),
      name: this.name,
      id: this.category.id
    };
    this.api.updateVenueCategoies(localStorage.getItem('uid'), this.category.id, param).then((data) => {

      this.api.alerts(this.api.translate('Success'), this.api.translate('Category Edited'), 'success');
      $("#panelCreate").hide("slow")
      this.getCategories();
      this.name = ""
    }).catch(error => {
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    });



  }



  /*async addNewCat() {
    const alert = await this.alertController.create({
      header: this.util.translate('Add New!'),
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: this.util.translate('Category Name'),
        },
      ],
      buttons: [
        {
          text: this.util.translate('Cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.util.translate('Ok'),
          handler: (data) => {
            console.log('Confirm Ok', data);
            if (data && data.name1 !== '') {
              console.log('add new');
              const ids = this.util.makeid(10);
              const param = {
                uid: localStorage.getItem('uid'),
                name: data.name1,
                id: ids
              };
              this.util.show();
              this.api.addVenueCategoies(localStorage.getItem('uid'), ids, param).then((data) => {
                this.util.hide();
                console.log(data);
                this.getCategories();
              }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
                console.log(error);
              });
            }
          }
        }
      ]
    });

    await alert.present();

    // this.router.navigate(['/add-category'])
  }

  
  
  
  async edit(item) {
    // console.log(item);
    const alert = await this.alertController.create({
      header: this.util.translate('Edit'),
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: this.util.translate('Category Name'),
          value: item.name
        },
      ],
      buttons: [
        {
          text: this.util.translate('Cancel'),
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: this.util.translate('Ok'),
          handler: (data) => {
            console.log('Confirm Ok', data);
            if (data && data.name1 !== '') {
              console.log('add new');

              const param = {
                uid: localStorage.getItem('uid'),
                name: data.name1,
                id: item.id
              };
              this.util.show();
              this.api.updateVenueCategoies(localStorage.getItem('uid'), item.id, param).then((data) => {
                this.util.hide();
                console.log(data);
                this.getCategories();
              }).catch(error => {
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
                console.log(error);
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }
  */
  async delete(item) {
    Swal.fire({
      title: this.api.translate('Are you sure?'),
      text: this.api.translate("You won't be able to revert this!"),
      icon: this.api.translate('warning'),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: this.api.translate('Delete')
    }).then((result) => {
      if (result.value) {
        this.api.deleteCategory(localStorage.getItem('uid'), item.id).then((data) => {
          console.log(data);
          Swal.fire({
            title: this.api.translate('Deleted!'),
            text: this.api.translate('Your record has been deleted.'),
            confirmButtonText: this.api.translate('Ok'),
            icon: "success"
          })
          this.getCategories();
        }).catch(error => {
          alert("error")

          console.log(error);
        });

      }
    })

  }

  showPanelCreated() {
    this.flag = 1;
    $("#panelCreate").show("slow")
  }
  showPanelEdit(item) {
    this.flag = 2;
    this.category = item;
    this.name = item.name
    $("#panelCreate").show("slow")
  }
}
