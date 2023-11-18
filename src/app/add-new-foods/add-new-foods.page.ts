import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ApisService } from 'src/app//services-venue/apis.service';
import { UtilService } from 'src/app/services/util.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastyService, ToastData, ToastOptions } from 'ng2-toasty';

@Component({
  selector: 'app-add-new-foods',
  templateUrl: './add-new-foods.page.html',
  styleUrls: ['./add-new-foods.page.scss'],
})
export class AddNewFoodsPage implements OnInit {
  categories: any = [];
  new: boolean;
  name: any;
  cid: any;
  price: any;
  gobyprice: any;
  descriptions: any;
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  uploadState: Observable<string>;
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  image: any = '';
  db = firebase.firestore();
  coverImage: any;
  isEdit: boolean = false;
  ratting: any;
  id: any;
  veg: boolean = true;
  status: boolean = true;
  banner_to_upload: any = '';
  // variation: boolean = false;
  // smallPrice: any;
  // mediumPrice: any;
  // largePrice: any;
  variations: any = [];
  size: boolean = false;
  constructor(
    private util: UtilService,
    private api: ApisService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService
  ) {
    // this.variation = false;
  }



  ngOnInit() {
    this.category();
    this.route.queryParams.subscribe(data => {
      this.new = data.register === 'true' ? true : false;
      console.log('data=>', data);
      if (data.hasOwnProperty('id')) {
        this.isEdit = true;
        this.api.getFoodWithId(localStorage.getItem('uid'), data.id).then((info) => {
          console.log(info);
          if (info) {
            this.cid = info.cid.id;
            this.name = info.name;
            this.coverImage = info.cover;
            this.price = info.price;
            this.gobyprice = info.gobyprice;
            this.descriptions = info.desc;
            this.ratting = info.ratting;
            this.id = info.id;
            this.veg = info.veg;
            this.status = info.status;
            console.log('status-------', info.status);
            this.variations = info.variations && info.variations.length ? info.variations : [];
            this.size = info.size;
          }
        }, error => {
          console.log(error);
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        }).catch(error => {
          console.log(error);
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

  changeSize(event) {
    console.log(event);
    if (event && event.detail && event.detail.checked) {
      const items = this.variations.filter(x => x.title === 'size');
      console.log('length', items);
      if (!items.length) {
        const item = {
          title: 'size',
          type: 'radio',
          items: []
        };
        this.variations.push(item);
        console.log(this.variations);
      }
    } else {
      this.variations = this.variations.filter(x => x.title !== 'size');
    }
  }

  category() {
    this.api.getVenueCategories(localStorage.getItem('uid')).then((data) => {
      console.log(data);
      if (data) {
        this.categories = data;
      }
    }, error => {
      console.log(error);
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    }).catch(error => {
      console.log(error);
      this.spinner.hide();
      console.log(error);
      this.error(this.api.translate('Something went wrong'));
    });
  }

  preview_banner(files) {

    console.log('fle', files);
    this.banner_to_upload = [];
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.banner_to_upload = files;
    if (this.banner_to_upload) {
      this.spinner.show();
      console.log('ok');
      const file1 = files[0];
      const storageRef = firebase.storage().ref('drivers' + '/' + file1.name);
      const task = storageRef.put(file1);
      task.on('state_changed',
        (snapshot: any) => {
        },
        (error) => {
          this.spinner.hide();
          this.error(this.api.translate('Something went wrong'));
          // this.api.alerts('Error', 'Something went wrong', 'error');
          console.error(error);
        },
        () => {
          storageRef.getDownloadURL().then((downloadURL) => {
            console.log('download ur', downloadURL);
            this.coverImage = downloadURL;
            this.spinner.hide();
          },
            (error) => {
              this.spinner.hide();
              this.error(this.api.translate('Something went wrong'));
              console.error('upload rejected', error);
            });
        }
      );

    } else {
      console.log('no');
    }
  }

  create() {

    if (this.cid === '' || this.name === '' || this.gobyprice === '' ||
      this.price === '' || this.coverImage === '') {
      this.error(this.api.translate('All Fields are required'));
      return false;
    }

    if (!this.coverImage || this.coverImage === '') {
      this.error(this.api.translate('Please add your cover image'));
      return false;
    }
    const id = this.util.makeid(10);
    const param = {
      uid: localStorage.getItem('uid'),
      cid: this.db.collection('categories').doc(this.cid),
      name: this.name,
      price: this.price,
      gobyprice: this.gobyprice,
      desc: this.descriptions,
      cover: this.coverImage,
      ratting: 0,
      veg: this.getBool(this.veg),
      status: this.getBool(this.status),
      variations: this.variations,
      size: this.size,
      id: id
    };
    this.spinner.show();
    this.api.addFood(localStorage.getItem('uid'), id, param).then((data) => {
      this.spinner.hide();
      console.log(data);
      this.api.alerts(this.api.translate('Success'), this.api.translate('Driver Created'), 'success');
      this.router.navigate(['venue', 'food']);
    }, error => {
      console.log(error);
      this.error(error);
      this.spinner.hide();
    }).catch(error => {
      console.log(error);
      this.error(error);
      this.spinner.hide();
    });
  }


  update() {

    if (this.cid === '' || this.name === '' || this.gobyprice === '' ||
      this.price === '' || this.coverImage === '') {
      this.error(this.api.translate('All Fields are required'));
      return false;
    }

    if (!this.coverImage || this.coverImage === '') {
      this.error(this.api.translate('Please add your cover image'));
      return false;
    }
    const status = this.status;
    console.log(Boolean(status));
    const parma = {
      uid: localStorage.getItem('uid'),
      id: this.id,
      cid: this.db.collection('categories').doc(this.cid),
      name: this.name,
      price: this.price,
      gobyprice: this.gobyprice,
      desc: this.descriptions,
      cover: this.coverImage,
      veg: this.getBool(this.veg),
      status: this.getBool(this.status),
      variations: this.variations,
      size: this.size

    };
    this.spinner.show();
    this.api.updateFood(parma.uid, this.id, parma).then((data) => {
      this.spinner.hide();
      console.log(data);
      this.api.alerts(this.api.translate('Success'), this.api.translate('Driver Created'), 'success');
      this.router.navigate(['venue', 'food']);
    }, error => {
      console.log(error);
      this.error(error);
      this.spinner.hide();
    }).catch(error => {
      console.log(error);
      this.error(error);
      this.spinner.hide();
    });
  }


  /*
  async cover() {
    const actionSheet = await this.actionSheetController.create({
      header: this.util.translate('Choose from'),
      buttons: [{
        text: this.util.translate('Camera'),
        icon: 'camera',
        handler: () => {
          console.log('Delete clicked');
          this.opemCamera('camera');
        }
      }, {
        text: this.util.translate('Gallery'),
        icon: 'image',
        handler: () => {
          console.log('Share clicked');
          this.opemCamera('gallery');
        }
      }, {
        text: this.util.translate('Cancel'),
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  */
  /*
    async addNew() {
  
      const alert = await this.alertController.create({
        header: 'Add Add-ons!',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Title'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok');
              if (data && data.name) {
                const item = this.variations.filter(x => x.title === data.name);
                console.log('=>"', item);
                if (item && item.length > 0) {
                  this.util.errorToast('Duplicate');
                } else {
                  this.presentAlertRadio(data.name);
                }
              }
            }
          }
        ]
      });
      await alert.present();
    }
    */
  /*
    async editTitle(index) {
  
      const alert = await this.alertController.create({
        header: 'Edit title!',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Title',
            value: this.variations[index].title
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok');
              if (data && data.name) {
                this.variations[index].title = data.name;
              }
            }
          }
        ]
      });
      await alert.present();
    }
  */

  /*
    async presentAlertRadio(name) {
      const alert = await this.alertController.create({
        header: 'Select Type',
        inputs: [
          {
            name: 'radio1',
            type: 'radio',
            label: 'Only One',
            value: 'radio',
            checked: true
          },
          {
            name: 'radio2',
            type: 'radio',
            label: 'Multiple',
            value: 'check'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              console.log('Confirm Ok');
              const item = {
                title: name,
                type: data,
                items: []
              };
              this.variations.push(item);
              console.log(this.variations);
            }
          }
        ]
      });
  
      await alert.present();
    }
    */
  /*
  opemCamera(type) {
    const options: CameraOptions = {
      quality: 100,
      targetHeight: 700,
      targetWidth: 700,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type === 'camera' ? 1 : 0
    };
    console.log('open');
    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
      this.util.show();
      const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
      firebase.storage().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
        .putString(base64Image, 'data_url').then((snapshot) => {
          
          snapshot.ref.getDownloadURL().then((url) => {
            console.log('url uploaded', url);
            this.coverImage = url;
          });
        }, error => {
          
          console.log(error);
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        }).catch((error) => {
          console.log(error);
          
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
        });
    }, (err) => {
      
    });
  }
*/
  getBool(val) {
    return !!JSON.parse(String(val).toLowerCase());
  }

  /*
  submit() {
    if (this.name === '' || !this.name || this.cid === '' ||
      !this.cid || this.price === '' || !this.price || this.descriptions === '' || !this.descriptions) {
      this.util.errorToast(this.util.translate('All Fields are required'));
      return false;
    }
    if (!this.coverImage || this.coverImage === '') {
      this.util.errorToast(this.util.translate('Please add your cover image'));
      return false;
    }
    this.util.show();
    if (this.isEdit) {
      console.log(this.cid);
      const status = this.status;
      console.log(Boolean(status));
      const parma = {
        uid: localStorage.getItem('uid'),
        id: this.id,
        cid: this.db.collection('categories').doc(this.cid),
        name: this.name,
        price: this.price,
        gobyprice: this.gobyprice,
        desc: this.descriptions,
        cover: this.coverImage,
        veg: this.veg,
        status: this.getBool(this.status),
        variations: this.variations,
        size: this.size

      };

      this.api.updateFood(parma.uid, this.id, parma).then((data) => {
        
        this.util.showToast(this.util.translate('Food updated Successfully'), 'success', 'bottom');
        this.location.back();
      }, error => {
        console.log(error);
        
        this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
      }).catch(error => {
        console.log(error);
        
        this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
      });
    } else {
      console.log(this.cid);
      const id = this.util.makeid(10);
      const param = {
        uid: localStorage.getItem('uid'),
        cid: this.db.collection('categories').doc(this.cid),
        name: this.name,
        price: this.price,
        gobyprice: this.gobyprice,
        desc: this.descriptions,
        cover: this.coverImage,
        ratting: 0,
        veg: this.veg,
        status: true,
        variations: this.variations,
        size: this.size,
        id: id
      };

      this.api.addFood(localStorage.getItem('uid'), id, param).then((data) => {
        
        //this.util.showToast(this.util.translate('Food Added Successfully'), 'success', 'bottom');
        const updateParam = {
          uid: localStorage.getItem('uid'),
          isClose: false
        };
        this.api.updateVenue(updateParam).then(data => {
          console.log(data);
        }).catch(error => {
          console.log(error);
        });
        this.location.back();
      }, error => {
        console.log(error);
        
        this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
      }).catch(error => {
        console.log(error);
        this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
      });
    }

  }
*/
  delete(item) {
    console.log(item);
    if (item.title === 'size') {
      this.size = false;
    }

    this.variations = this.variations.filter(x => x.title !== item.title);
  }
  /*
    async addItem(index) {
      console.log(this.variations[index]);
      const alert = await this.alertController.create({
        header: 'Agregar un tamaño' ,
        inputs: [
          {
            name: 'title',
            type: 'text',
            placeholder: 'Nombre'
          },
          {
            name: 'price',
            type: 'number',
            placeholder: 'Precio'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Aceptar',
            handler: (data) => {
              console.log('Confirm Ok');
              if (data && data.title && data.price) {
                const item = {
                  title: data.title,
                  price: data.price
                };
                this.variations[index].items.push(item);
                console.log(this.variations);
              }
            }
          }
        ]
      });
  
      await alert.present();
    }
    */

  deleteSub(index, item) {
    console.log(index);
    console.log(item);
    const selected = this.variations[index].items;
    console.log('selected', selected);
    const data = selected.filter(x => x.title !== item.title);
    console.log(data);
    this.variations[index].items = data;
    console.log('done', this.variations);
  }
  /*
    async editSub(index, items, subIndex) {
      console.log(index, items, subIndex);
      console.log(this.variations);
      const alert = await this.alertController.create({
        header: 'Editar tamaño ',
        inputs: [
          {
            name: 'title',
            type: 'text',
            placeholder: 'Nombre',
            value: this.variations[index].items[subIndex].title
          },
          {
            name: 'price',
            type: 'number',
            placeholder: 'Precio',
            value: this.variations[index].items[subIndex].price
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Aceptar',
            handler: (data) => {
              console.log('Confirm Ok');
              this.variations[index].items[subIndex].title = data.title;
              this.variations[index].items[subIndex].price = data.price;
              console.log(this.variations);
            }
          }
        ]
      });
  
      await alert.present();
    }
  */
  async deleteFood() {
    Swal.fire({
      title: this.util.translate('Are you sure?'),
      text: this.util.translate("You won't be able to revert this!"),
      icon: this.util.translate('warning'),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: this.util.translate('Delete')
    }).then((result) => {
      if (result.value) {
        this.api.deleteFood(localStorage.getItem('uid'), this.id).then((data) => {
          console.log(data);
          Swal.fire({
            title: this.util.translate('Deleted!'),
            text: this.util.translate('Your record has been deleted.'),
            confirmButtonText: this.util.translate('Ok'),
            icon: "success"
          })
          this.router.navigate(['venue', 'food']);
        }).catch(error => {
          alert("error")
          this.spinner.hide();
          console.log(error);
          this.error(this.api.translate('Something went wrong'));
          console.log(error);
        });

      }
    })

  }




  getCurrency() {
    return this.util.getCurrecySymbol();
  }
}
