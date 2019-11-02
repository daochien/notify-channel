webpackJsonp([1],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(56)
/* template */
var __vue_template__ = __webpack_require__(57)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ad132a7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/layout/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ad132a7", Component.options)
  } else {
    hotAPI.reload("data-v-2ad132a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(44)("3c9fa47a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ad132a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ad132a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-custom" }, [
      _c("ul", { staticClass: "list-unstyled topnav-menu float-right mb-0" }, [
        _c("li", { staticClass: "d-none d-sm-block" }, [
          _c("form", { staticClass: "app-search" }, [
            _c("div", { staticClass: "app-search-box" }, [
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Search..." }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    { staticClass: "btn", attrs: { type: "submit" } },
                    [_c("i", { staticClass: "fe-search" })]
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "dropdown notification-list" }, [
          _c(
            "a",
            {
              staticClass: "nav-link dropdown-toggle  waves-effect waves-light",
              attrs: {
                "data-toggle": "dropdown",
                href: "#",
                role: "button",
                "aria-haspopup": "false",
                "aria-expanded": "false"
              }
            },
            [
              _c("i", { staticClass: "fe-bell noti-icon" }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "badge badge-danger rounded-circle noti-icon-badge"
                },
                [_vm._v("9")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dropdown-menu dropdown-menu-right dropdown-lg" },
            [
              _c("div", { staticClass: "dropdown-item noti-title" }, [
                _c("h5", { staticClass: "m-0" }, [
                  _c("span", { staticClass: "float-right" }, [
                    _c("a", { staticClass: "text-dark", attrs: { href: "" } }, [
                      _c("small", [_vm._v("Clear All")])
                    ])
                  ]),
                  _vm._v("Notification\n                    ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "slimscroll noti-scroll" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item active",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [
                    _c("div", { staticClass: "notify-icon" }, [
                      _c("img", {
                        staticClass: "img-fluid rounded-circle",
                        attrs: {
                          src: "app/assets/images/users/user-1.jpg",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v("Cristina Pride")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted mb-0 user-msg" }, [
                      _c("small", [
                        _vm._v("Hi, How are you? What about our next meeting")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [
                    _c("div", { staticClass: "notify-icon bg-primary" }, [
                      _c("i", {
                        staticClass: "mdi mdi-comment-account-outline"
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "Caleb Flakelar commented on Admin\n                            "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("1 min ago")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [
                    _c("div", { staticClass: "notify-icon" }, [
                      _c("img", {
                        staticClass: "img-fluid rounded-circle",
                        attrs: {
                          src: "app/assets/images/users/user-4.jpg",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v("Karen Robinson")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted mb-0 user-msg" }, [
                      _c("small", [
                        _vm._v("Wow ! this admin looks good and awesome design")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [
                    _c("div", { staticClass: "notify-icon bg-warning" }, [
                      _c("i", { staticClass: "mdi mdi-account-plus" })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "New user registered.\n                            "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("5 hours ago")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [
                    _c("div", { staticClass: "notify-icon bg-info" }, [
                      _c("i", {
                        staticClass: "mdi mdi-comment-account-outline"
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "Caleb Flakelar commented on Admin\n                            "
                      ),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("4 days ago")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item notify-item",
                    attrs: { href: "javascript:void(0);" }
                  },
                  [
                    _c("div", { staticClass: "notify-icon bg-secondary" }, [
                      _c("i", { staticClass: "mdi mdi-heart" })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "notify-details" }, [
                      _vm._v(
                        "Carlos Crouch liked\n                            "
                      ),
                      _c("b", [_vm._v("Admin")]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("13 days ago")
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "dropdown-item text-center text-primary notify-item notify-all",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _vm._v(
                    "\n                    View all\n                    "
                  ),
                  _c("i", { staticClass: "fi-arrow-right" })
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "dropdown notification-list" }, [
          _c(
            "a",
            {
              staticClass:
                "nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light",
              attrs: {
                "data-toggle": "dropdown",
                href: "#",
                role: "button",
                "aria-haspopup": "false",
                "aria-expanded": "false"
              }
            },
            [
              _c("img", {
                staticClass: "rounded-circle",
                attrs: {
                  src: "app/assets/images/users/user-1.jpg",
                  alt: "user-image"
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "pro-user-name ml-1" }, [
                _vm._v("\n                    Geneva "),
                _c("i", { staticClass: "mdi mdi-chevron-down" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dropdown-menu dropdown-menu-right profile-dropdown "
            },
            [
              _c("div", { staticClass: "dropdown-header noti-title" }, [
                _c("h6", { staticClass: "text-overflow m-0" }, [
                  _vm._v("Welcome !")
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item notify-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-user" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("My Account")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item notify-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-settings" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Settings")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item notify-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-lock" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Lock Screen")])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item notify-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-log-out" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Logout")])
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "dropdown notification-list" }, [
          _c(
            "a",
            {
              staticClass: "nav-link right-bar-toggle waves-effect waves-light",
              attrs: { href: "javascript:void(0);" }
            },
            [_c("i", { staticClass: "fe-settings noti-icon" })]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "logo-box" }, [
        _c(
          "a",
          { staticClass: "logo text-center", attrs: { href: "index.html" } },
          [
            _c("span", { staticClass: "logo-lg" }, [
              _c("img", {
                attrs: {
                  src: "app/assets/images/logo-light.png",
                  alt: "",
                  height: "18"
                }
              })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "logo-sm" }, [
              _c("img", {
                attrs: {
                  src: "app/assets/images/logo-sm.png",
                  alt: "",
                  height: "24"
                }
              })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "list-unstyled topnav-menu topnav-menu-left m-0" },
        [
          _c("li", [
            _c(
              "button",
              { staticClass: "button-menu-mobile waves-effect waves-light" },
              [_c("i", { staticClass: "fe-menu" })]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown d-none d-lg-block" }, [
            _c(
              "a",
              {
                staticClass:
                  "nav-link dropdown-toggle waves-effect waves-light",
                attrs: {
                  "data-toggle": "dropdown",
                  href: "#",
                  role: "button",
                  "aria-haspopup": "false",
                  "aria-expanded": "false"
                }
              },
              [
                _vm._v("\n                Create New\n                "),
                _c("i", { staticClass: "mdi mdi-chevron-down" })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-menu" }, [
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-briefcase mr-1" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("New Projects")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-user mr-1" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Create Users")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-bar-chart-line- mr-1" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Revenue Report")])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-settings mr-1" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Settings")])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("i", { staticClass: "fe-headphones mr-1" }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Help & Support")])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "dropdown dropdown-mega d-none d-lg-block" },
            [
              _c(
                "a",
                {
                  staticClass:
                    "nav-link dropdown-toggle waves-effect waves-light",
                  attrs: {
                    "data-toggle": "dropdown",
                    href: "#",
                    role: "button",
                    "aria-haspopup": "false",
                    "aria-expanded": "false"
                  }
                },
                [
                  _vm._v("\n                Mega Menu\n                "),
                  _c("i", { staticClass: "mdi mdi-chevron-down" })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-menu dropdown-megamenu" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-8" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("h5", { staticClass: "text-dark mt-0" }, [
                          _vm._v("UI Components")
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "list-unstyled megamenu-list" },
                          [
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Widgets")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Nestable List")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Range Sliders")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Masonry Items")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Sweet Alerts")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Treeview Page")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Tour Page")]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("h5", { staticClass: "text-dark mt-0" }, [
                          _vm._v("Applications")
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "list-unstyled megamenu-list" },
                          [
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("eCommerce Pages")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("CRM Pages")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Email")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Calendar")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Team Contacts")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Task Board")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Email Templates")]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("h5", { staticClass: "text-dark mt-0" }, [
                          _vm._v("Extra Pages")
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "list-unstyled megamenu-list" },
                          [
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Left Sidebar with User")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Menu Collapsed")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Small Left Sidebar")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("New Header Style")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Search Result")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Gallery Pages")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "a",
                                { attrs: { href: "javascript:void(0);" } },
                                [_vm._v("Maintenance & Coming Soon")]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center mt-3" }, [
                      _c("h3", { staticClass: "text-dark" }, [
                        _vm._v("Special Discount Sale!")
                      ]),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Save up to 70% off.")]),
                      _vm._v(" "),
                      _c(
                        "button",
                        { staticClass: "btn btn-primary btn-rounded mt-3" },
                        [_vm._v("Download Now")]
                      )
                    ])
                  ])
                ])
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ad132a7", module.exports)
  }
}

/***/ })

});