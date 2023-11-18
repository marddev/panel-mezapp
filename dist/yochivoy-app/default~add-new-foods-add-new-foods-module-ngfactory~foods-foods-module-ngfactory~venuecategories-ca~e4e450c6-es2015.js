(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-new-foods-add-new-foods-module-ngfactory~foods-foods-module-ngfactory~venuecategories-ca~e4e450c6"],{

/***/ "./src/app/services-venue/apis.service.ts":
/*!************************************************!*\
  !*** ./src/app/services-venue/apis.service.ts ***!
  \************************************************/
/*! exports provided: AuthInfo, ApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInfo", function() { return AuthInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisService", function() { return ApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");











class AuthInfo {
    constructor($uid) {
        this.$uid = $uid;
    }
    isLoggedIn() {
        return !!this.$uid;
    }
}
class ApisService {
    constructor(fireAuth, adb, http, translateService) {
        this.fireAuth = fireAuth;
        this.adb = adb;
        this.http = http;
        this.translateService = translateService;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ApisService.UNKNOWN_USER);
    }
    checkAuth() {
        return new Promise(resolve => {
            this.fireAuth.auth.onAuthStateChanged(user => {
                resolve(user);
            });
        });
    }
    alerts(title, message, type) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
    }
    translate(str) {
        const currentLang = this.translateService.currentLang;
        const returnValue = this.translateService.translations[currentLang][str];
        if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
        }
        else {
            return returnValue;
        }
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    this.db
                        .collection("users")
                        .doc(res.user.uid)
                        .update({
                        fcm_token: localStorage.getItem("fcm")
                            ? localStorage.getItem("fcm")
                            : ""
                    });
                    this.authInfo$.next(new AuthInfo(res.user.uid));
                    resolve(res.user);
                }
            })
                .catch(err => {
                this.authInfo$.next(ApisService.UNKNOWN_USER);
                reject(`login failed ${err}`);
            });
        });
    }
    register(emails, pwd, fnames, lnames) {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth
                .createUserWithEmailAndPassword(emails, pwd)
                .then(res => {
                if (res.user) {
                    this.db
                        .collection("users")
                        .doc(res.user.uid)
                        .set({
                        uid: res.user.uid,
                        email: emails,
                        fname: fnames,
                        lname: lnames,
                        type: "venue",
                        status: "open"
                    });
                    this.authInfo$.next(new AuthInfo(res.user.uid));
                    resolve(res.user);
                }
            })
                .catch(err => {
                this.authInfo$.next(ApisService.UNKNOWN_USER);
                reject(`login failed ${err}`);
            });
        });
    }
    logout() {
        this.authInfo$.next(ApisService.UNKNOWN_USER);
        // this.db.collection('users').doc(localStorage.getItem('uid')).update({ 'fcm_token': firebase.firestore.FieldValue.delete() })
        return this.fireAuth.auth.signOut();
    }
    resetPassword(email) {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth
                .sendPasswordResetEmail(email)
                .then(res => {
                resolve(res);
            })
                .catch(err => {
                reject(`reset failed ${err}`);
            });
        });
    }
    checkEmail(email) {
        return new Promise((resolve, reject) => {
            this.fireAuth.auth
                .fetchSignInMethodsForEmail(email)
                .then((info) => {
                resolve(info);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    getProfile(id) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("users")
                .doc(id)
                .get()
                .subscribe((profile) => {
                resolve(profile.data());
            }, error => {
                reject(error);
            });
        });
    }
    getMessages(id) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("messages")
                .doc(id)
                .collection("chats")
                .get()
                .subscribe((messages) => {
                console.log(messages);
                let data = messages.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    updateProfile(uid, param) {
        return new Promise((resolve, reject) => {
            this.db
                .collection("users")
                .doc(uid)
                .update(param)
                .then(data => {
                resolve(data);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    getVenueDetails(id) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("venue")
                .doc(id)
                .get()
                .subscribe((venue) => {
                resolve(venue.data());
            }, error => {
                reject(error);
            });
        });
    }
    getVenueCategories(id) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("categories", ref => ref.where("uid", "==", id))
                .get()
                .subscribe(venue => {
                var data = venue.docs.map(element => {
                    var item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    updateVenueCategoies(id, cid, param) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("categories")
                .doc(cid)
                .update(param)
                .then(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    deleteCategory(id, cid) {
        return new Promise((resolve, reject) => {
            this.db
                .collection("categories")
                .doc(cid)
                .delete()
                .then(data => {
                resolve(data);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    deleteFood(uid, id) {
        return new Promise((resolve, reject) => {
            this.db
                .collection("foods")
                .doc(uid)
                .collection("all")
                .doc(id)
                .delete()
                .then(data => {
                resolve(data);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    getFoodWithId(uid, id) {
        return new Promise((resolve, reject) => {
            this.db
                .collection("foods")
                .doc(uid)
                .collection("all")
                .doc(id)
                .get()
                .then(data => {
                console.log("**", data.data());
                var item = data.data();
                item.id = data.id;
                data
                    .data()
                    .cid.get()
                    .then(function (doc) {
                    item.cid = doc.data();
                    item.cid.id = doc.id;
                });
                resolve(item);
            }, error => {
                reject(error);
            });
        });
    }
    getFoods(uid) {
        return new Promise((resolve, reject) => {
            this.db
                .collection("foods")
                .doc(uid)
                .collection("all")
                .get()
                .then(data => {
                var users = data.docs.map(doc => {
                    var item = doc.data();
                    item.cid.get().then(function (doc) {
                        item.cid = doc.data();
                        item.cid.id = doc.id;
                    });
                    item.id = doc.id;
                    return item;
                });
                resolve(users);
            }, error => {
                reject(error);
            });
        });
    }
    addFood(uid, id, param) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("foods")
                .doc(uid)
                .collection("all")
                .doc(id)
                .set(param)
                .then(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    updateFood(uid, id, param) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("foods")
                .doc(uid)
                .collection("all")
                .doc(id)
                .update(param)
                .then(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    addVenueCategoies(cid, param) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("categories")
                .doc(cid)
                .set(param)
                .then(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    createVenue(informations) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("venue")
                .doc(informations.uid)
                .set(informations)
                .then(data => {
                resolve(data);
            }, error => {
                reject(error);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    updateVenue(informations) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("venue")
                .doc(informations.uid)
                .update(informations)
                .then(data => {
                resolve(data);
            }, error => {
                reject(error);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    sendNotification(msg, title, id) {
        const body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: { en: title },
            contents: { en: msg },
            data: { task: msg }
        };
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
                .set("Content-Type", "application/json")
                .set("Authorization", `Basic ${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey}`)
        };
        return this.http.post("https://onesignal.com/api/v1/notifications", body, header);
    }
    getMyOrders(id) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("orders", ref => ref.where("restId", "==", id))
                .get()
                .subscribe(venue => {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.uid.get().then(function (doc) {
                        item.uid = doc.data();
                        item.uid.id = doc.id;
                    });
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getOrderById(id) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.adb
                .collection("orders")
                .doc(id)
                .get()
                .subscribe((order) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = yield order.data();
                yield data.uid.get().then(function (doc) {
                    data.uid = doc.data();
                    data.uid.id = doc.id;
                });
                yield data.vid.get().then(function (doc) {
                    data.vid = doc.data();
                    data.vid.id = doc.id;
                });
                /* if (data && data.dId) {
                   await data.dId.get().then(function(doc) {
                     data.dId = doc.data();
                     data.dId.id = doc.id;
                   });
                 }*/
                resolve(data);
            }), error => {
                reject(error);
            });
        }));
    }
    updateOrderStatus(id, value) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.adb
                .collection("orders")
                .doc(id)
                .update({ status: value })
                .then((order) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                resolve(order);
            }))
                .catch(error => {
                reject(error);
            });
        }));
    }
    updateOrder(id, param) {
        //param.dId = this.db.collection("users").doc(param.dId);
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.adb
                .collection("orders")
                .doc(id)
                .update(param)
                .then((order) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                resolve(order);
            }))
                .catch(error => {
                reject(error);
            });
        }));
    }
    getDrivers() {
        return new Promise((resolve, reject) => {
            this.adb.collection('users', ref => ref.where('type', '==', 'delivery').limit(3)).get().subscribe((venue) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = venue.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    return item;
                });
                resolve(data);
            }), error => {
                reject(error);
            });
        });
    }
    getMyReviews(id) {
        return new Promise((resolve, reject) => {
            this.adb
                .collection("reviews", ref => ref.where("restId", "==", id))
                .get()
                .subscribe((review) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let data = review.docs.map(element => {
                    let item = element.data();
                    item.id = element.id;
                    item.uid.get().then(function (doc) {
                        item.uid = doc.data();
                    });
                    return item;
                });
                resolve(data);
            }), error => {
                reject(error);
            });
        });
    }
    httpPost(url, body) {
        const header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
                .set("Content-Type", "application/x-www-form-urlencoded")
                .set("Authorization", `Bearer ${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripe.sk}`)
        };
        const order = this.JSON_to_URLEncoded(body);
        console.log(order);
        return this.http.post(url, order, header);
    }
    JSON_to_URLEncoded(element, key, list) {
        let new_list = list || [];
        if (typeof element == "object") {
            for (let idx in element) {
                this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
            }
        }
        else {
            new_list.push(key + "=" + encodeURIComponent(element));
        }
        return new_list.join("&");
    }
}
ApisService.UNKNOWN_USER = new AuthInfo(null);
ApisService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ factory: function ApisService_Factory() { return new ApisService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"])); }, token: ApisService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



class UtilService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    translate(str) {
        const currentLang = this.translateService.currentLang;
        const returnValue = this.translateService.translations[currentLang][str];
        if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
        }
        else {
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
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].general.code;
    }
    getCurrecySymbol() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].general.symbol;
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
UtilService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function UtilService_Factory() { return new UtilService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); }, token: UtilService, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default~add-new-foods-add-new-foods-module-ngfactory~foods-foods-module-ngfactory~venuecategories-ca~e4e450c6-es2015.js.map