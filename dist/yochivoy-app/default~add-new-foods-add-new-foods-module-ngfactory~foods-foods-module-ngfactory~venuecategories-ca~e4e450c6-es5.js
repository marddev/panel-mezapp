function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-new-foods-add-new-foods-module-ngfactory~foods-foods-module-ngfactory~venuecategories-ca~e4e450c6"], {
  /***/
  "./src/app/services-venue/apis.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services-venue/apis.service.ts ***!
    \************************************************/

  /*! exports provided: AuthInfo, ApisService */

  /***/
  function srcAppServicesVenueApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInfo", function () {
      return AuthInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AuthInfo = /*#__PURE__*/function () {
      function AuthInfo($uid) {
        _classCallCheck(this, AuthInfo);

        this.$uid = $uid;
      }

      _createClass(AuthInfo, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.$uid;
        }
      }]);

      return AuthInfo;
    }();

    var ApisService = /*#__PURE__*/function () {
      function ApisService(fireAuth, adb, http, translateService) {
        _classCallCheck(this, ApisService);

        this.fireAuth = fireAuth;
        this.adb = adb;
        this.http = http;
        this.translateService = translateService;
        this.db = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ApisService.UNKNOWN_USER);
      }

      _createClass(ApisService, [{
        key: "checkAuth",
        value: function checkAuth() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.fireAuth.auth.onAuthStateChanged(function (user) {
              resolve(user);
            });
          });
        }
      }, {
        key: "alerts",
        value: function alerts(title, message, type) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
        }
      }, {
        key: "translate",
        value: function translate(str) {
          var currentLang = this.translateService.currentLang;
          var returnValue = this.translateService.translations[currentLang][str];

          if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
          } else {
            return returnValue;
          }
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            _this2.fireAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
              if (res.user) {
                _this2.db.collection("users").doc(res.user.uid).update({
                  fcm_token: localStorage.getItem("fcm") ? localStorage.getItem("fcm") : ""
                });

                _this2.authInfo$.next(new AuthInfo(res.user.uid));

                resolve(res.user);
              }
            })["catch"](function (err) {
              _this2.authInfo$.next(ApisService.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "register",
        value: function register(emails, pwd, fnames, lnames) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.fireAuth.auth.createUserWithEmailAndPassword(emails, pwd).then(function (res) {
              if (res.user) {
                _this3.db.collection("users").doc(res.user.uid).set({
                  uid: res.user.uid,
                  email: emails,
                  fname: fnames,
                  lname: lnames,
                  type: "venue",
                  status: "open"
                });

                _this3.authInfo$.next(new AuthInfo(res.user.uid));

                resolve(res.user);
              }
            })["catch"](function (err) {
              _this3.authInfo$.next(ApisService.UNKNOWN_USER);

              reject("login failed ".concat(err));
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authInfo$.next(ApisService.UNKNOWN_USER); // this.db.collection('users').doc(localStorage.getItem('uid')).update({ 'fcm_token': firebase.firestore.FieldValue.delete() })

          return this.fireAuth.auth.signOut();
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.fireAuth.auth.sendPasswordResetEmail(email).then(function (res) {
              resolve(res);
            })["catch"](function (err) {
              reject("reset failed ".concat(err));
            });
          });
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(email) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            _this5.fireAuth.auth.fetchSignInMethodsForEmail(email).then(function (info) {
              resolve(info);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile(id) {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            _this6.adb.collection("users").doc(id).get().subscribe(function (profile) {
              resolve(profile.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages(id) {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.adb.collection("messages").doc(id).collection("chats").get().subscribe(function (messages) {
              console.log(messages);
              var data = messages.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(uid, param) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            _this8.db.collection("users").doc(uid).update(param).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenueDetails",
        value: function getVenueDetails(id) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.adb.collection("venue").doc(id).get().subscribe(function (venue) {
              resolve(venue.data());
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getVenueCategories",
        value: function getVenueCategories(id) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.adb.collection("categories", function (ref) {
              return ref.where("uid", "==", id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateVenueCategoies",
        value: function updateVenueCategoies(id, cid, param) {
          var _this11 = this;

          return new Promise(function (resolve, reject) {
            _this11.adb.collection("categories").doc(cid).update(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id, cid) {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            _this12.db.collection("categories").doc(cid)["delete"]().then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deleteFood",
        value: function deleteFood(uid, id) {
          var _this13 = this;

          return new Promise(function (resolve, reject) {
            _this13.db.collection("foods").doc(uid).collection("all").doc(id)["delete"]().then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getFoodWithId",
        value: function getFoodWithId(uid, id) {
          var _this14 = this;

          return new Promise(function (resolve, reject) {
            _this14.db.collection("foods").doc(uid).collection("all").doc(id).get().then(function (data) {
              console.log("**", data.data());
              var item = data.data();
              item.id = data.id;
              data.data().cid.get().then(function (doc) {
                item.cid = doc.data();
                item.cid.id = doc.id;
              });
              resolve(item);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getFoods",
        value: function getFoods(uid) {
          var _this15 = this;

          return new Promise(function (resolve, reject) {
            _this15.db.collection("foods").doc(uid).collection("all").get().then(function (data) {
              var users = data.docs.map(function (doc) {
                var item = doc.data();
                item.cid.get().then(function (doc) {
                  item.cid = doc.data();
                  item.cid.id = doc.id;
                });
                item.id = doc.id;
                return item;
              });
              resolve(users);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addFood",
        value: function addFood(uid, id, param) {
          var _this16 = this;

          return new Promise(function (resolve, reject) {
            _this16.adb.collection("foods").doc(uid).collection("all").doc(id).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateFood",
        value: function updateFood(uid, id, param) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.adb.collection("foods").doc(uid).collection("all").doc(id).update(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "addVenueCategoies",
        value: function addVenueCategoies(cid, param) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.adb.collection("categories").doc(cid).set(param).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "createVenue",
        value: function createVenue(informations) {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            _this19.adb.collection("venue").doc(informations.uid).set(informations).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "updateVenue",
        value: function updateVenue(informations) {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            _this20.adb.collection("venue").doc(informations.uid).update(informations).then(function (data) {
              resolve(data);
            }, function (error) {
              reject(error);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, title, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            },
            data: {
              task: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Content-Type", "application/json").set("Authorization", "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey))
          };
          return this.http.post("https://onesignal.com/api/v1/notifications", body, header);
        }
      }, {
        key: "getMyOrders",
        value: function getMyOrders(id) {
          var _this21 = this;

          return new Promise(function (resolve, reject) {
            _this21.adb.collection("orders", function (ref) {
              return ref.where("restId", "==", id);
            }).get().subscribe(function (venue) {
              var data = venue.docs.map(function (element) {
                var item = element.data();
                item.uid.get().then(function (doc) {
                  item.uid = doc.data();
                  item.uid.id = doc.id;
                });
                item.id = element.id;
                return item;
              });
              resolve(data);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getOrderById",
        value: function getOrderById(id) {
          var _this22 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this23 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.adb.collection("orders").doc(id).get().subscribe(function (order) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var data;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return order.data();

                                case 2:
                                  data = _context.sent;
                                  _context.next = 5;
                                  return data.uid.get().then(function (doc) {
                                    data.uid = doc.data();
                                    data.uid.id = doc.id;
                                  });

                                case 5:
                                  _context.next = 7;
                                  return data.vid.get().then(function (doc) {
                                    data.vid = doc.data();
                                    data.vid.id = doc.id;
                                  });

                                case 7:
                                  /* if (data && data.dId) {
                                     await data.dId.get().then(function(doc) {
                                       data.dId = doc.data();
                                       data.dId.id = doc.id;
                                     });
                                   }*/
                                  resolve(data);

                                case 8:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));
                      }, function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          });
        }
      }, {
        key: "updateOrderStatus",
        value: function updateOrderStatus(id, value) {
          var _this24 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this24, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this25 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.adb.collection("orders").doc(id).update({
                        status: value
                      }).then(function (order) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this25, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  resolve(order);

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));
                      })["catch"](function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          });
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(id, param) {
          var _this26 = this;

          //param.dId = this.db.collection("users").doc(param.dId);
          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this27 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.adb.collection("orders").doc(id).update(param).then(function (order) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  resolve(order);

                                case 1:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));
                      })["catch"](function (error) {
                        reject(error);
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }, {
        key: "getDrivers",
        value: function getDrivers() {
          var _this28 = this;

          return new Promise(function (resolve, reject) {
            _this28.adb.collection('users', function (ref) {
              return ref.where('type', '==', 'delivery').limit(3);
            }).get().subscribe(function (venue) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var data;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        data = venue.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getMyReviews",
        value: function getMyReviews(id) {
          var _this29 = this;

          return new Promise(function (resolve, reject) {
            _this29.adb.collection("reviews", function (ref) {
              return ref.where("restId", "==", id);
            }).get().subscribe(function (review) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this29, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var data;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        data = review.docs.map(function (element) {
                          var item = element.data();
                          item.id = element.id;
                          item.uid.get().then(function (doc) {
                            item.uid = doc.data();
                          });
                          return item;
                        });
                        resolve(data);

                      case 2:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "httpPost",
        value: function httpPost(url, body) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set("Content-Type", "application/x-www-form-urlencoded").set("Authorization", "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripe.sk))
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element == "object") {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + "[" + idx + "]" : idx, new_list);
            }
          } else {
            new_list.push(key + "=" + encodeURIComponent(element));
          }

          return new_list.join("&");
        }
      }]);

      return ApisService;
    }();

    ApisService.UNKNOWN_USER = new AuthInfo(null);
    ApisService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      factory: function ApisService_Factory() {
        return new ApisService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]));
      },
      token: ApisService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var UtilService = /*#__PURE__*/function () {
      function UtilService(translateService) {
        _classCallCheck(this, UtilService);

        this.translateService = translateService;
      }

      _createClass(UtilService, [{
        key: "translate",
        value: function translate(str) {
          var currentLang = this.translateService.currentLang;
          var returnValue = this.translateService.translations[currentLang][str];

          if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
          } else {
            return returnValue;
          }
        }
      }, {
        key: "setReport",
        value: function setReport(data) {
          this.report = data;
        }
      }, {
        key: "getReport",
        value: function getReport() {
          return this.report;
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].general.code;
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].general.symbol;
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        }
      }]);

      return UtilService;
    }();

    UtilService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function UtilService_Factory() {
        return new UtilService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
      },
      token: UtilService,
      providedIn: "root"
    });
    /***/
  }
}]);
//# sourceMappingURL=default~add-new-foods-add-new-foods-module-ngfactory~foods-foods-module-ngfactory~venuecategories-ca~e4e450c6-es5.js.map