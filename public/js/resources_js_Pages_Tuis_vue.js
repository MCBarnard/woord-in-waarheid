(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Tuis_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BidUur",
  props: {
    image: {
      "default": "https://images.squarespace-cdn.com/content/v1/58eba8d3725e255182484880/1611853076022-C288NADWOB9PV5SOS93I/ke17ZwdGBToddI8pDm48kBl4YCNUOkrKYQ4p1H4jLnZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua0RCRIEXQSuPz5RnEM2QpCGlrhZInH2mIdVOLiRr-BZmfDfC9hcJ_CV9QBm_ln3EA/Prayer.jpg?format=1000w",
      type: String
    },
    heading: {
      "default": "Bid Uur",
      type: String
    },
    subHeading: {
      "default": "Bid saam by die kerk of aanlyn!",
      type: String
    },
    linkText: {
      "default": "Bid Uur",
      type: String
    },
    link: {
      "default": "/",
      type: String
    },
    body: {
      "default": ""
    },
    reverse: {
      "default": false,
      type: Boolean
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Testimonials",
  data: function data() {
    return {
      index: 0,
      next: undefined,
      prev: undefined,
      slides: undefined
    };
  },
  mounted: function mounted() {
    this.next = document.querySelector(".next");
    this.prev = document.querySelector(".previous");
    this.slides = document.querySelectorAll(".slide");
    this.display(this.index);
  },
  props: {
    testimonials: {
      type: Array,
      "default": [{
        quote: "“ 'n Getuie se storie, Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" + "                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae\n" + "                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi ”",
        name: "Tanya Sinclair",
        image: "https://alcs-slider.netlify.app/images/image-tanya.jpg"
      }, {
        quote: "“ 'n Getuie se storie, Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" + "                        Amet nemo harum repellendus aut itaque. Temporibus quaerat dolores ut, cupiditate molestiae\n" + "                        commodi! Distinctio praesentium, debitis aut minima doloribus earum quia commodi ”",
        name: "John Tarkpor",
        image: "https://alcs-slider.netlify.app/images/image-john.jpg"
      }]
    }
  },
  methods: {
    display: function display(index) {
      this.slides.forEach(function (slide) {
        slide.style.display = "none";
      });
      this.slides[index].style.display = "flex";
    },
    nextSlide: function nextSlide() {
      this.index++;

      if (this.index > this.slides.length - 1) {
        this.index = 0;
      }

      this.display(this.index);
    },
    prevSlide: function prevSlide() {
      this.index--;

      if (this.index < 0) {
        this.index = this.slides.length - 1;
      }

      this.display(this.index);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HeadAndBullets"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "HeroBanner",
  props: {
    text: {
      "default": "Iemand roep in die woestyn: Maak die pad vir die Here gereed, maak die paaie vir Hom reguit.",
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Widgets_VisieMisie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Widgets/VisieMisie */ "./resources/js/Components/Widgets/VisieMisie.vue");
/* harmony import */ var _Components_general_HeroBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/general/HeroBanner */ "./resources/js/Components/general/HeroBanner.vue");
/* harmony import */ var _Components_Widgets_EventCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Widgets/EventCard */ "./resources/js/Components/Widgets/EventCard.vue");
/* harmony import */ var _Components_Widgets_Testimonials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Widgets/Testimonials */ "./resources/js/Components/Widgets/Testimonials.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  components: {
    HeroBanner: _Components_general_HeroBanner__WEBPACK_IMPORTED_MODULE_1__.default,
    VisieMisie: _Components_Widgets_VisieMisie__WEBPACK_IMPORTED_MODULE_0__.default,
    EventCard: _Components_Widgets_EventCard__WEBPACK_IMPORTED_MODULE_2__.default,
    Testimonials: _Components_Widgets_Testimonials__WEBPACK_IMPORTED_MODULE_3__.default
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-147c59ff],\n*[data-v-147c59ff]::before,\n*[data-v-147c59ff]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\nhtml body[data-v-147c59ff] {\n  width: 100%;\n  min-height: 100vh;\n  color: #202046;\n  font-size: 32px;\n  font-family: \"Inter\", sans-serif;\n  background-color: #FFFFFF;\n  background-repeat: no-repeat;\n  background-position: left bottom;\n  background-size: 280px 72px;\n  background-image: url(https://alcs-slider.netlify.app/images/pattern-curve.svg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n}\nhtml body #testimonial-section[data-v-147c59ff] {\n  position: relative;\n  max-width: 71rem;\n  margin: auto;\n}\nhtml body main[data-v-147c59ff] {\n  width: 100%;\n  max-width: 1440px;\n  padding: 16px;\n}\nhtml body main .slider .buttons[data-v-147c59ff] {\n  z-index: 1;\n  right: 50%;\n  top: 261px;\n  width: 80px;\n  height: 40px;\n  position: absolute;\n  border-radius: 50px;\n  transform: translateX(50%);\n  background-color: #FFFFFF;\n}\nhtml body main .slider .buttons .previous[data-v-147c59ff],\nhtml body main .slider .buttons .next[data-v-147c59ff] {\n  width: 50%;\n  height: 100%;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\nhtml body main .slider .buttons .previous[data-v-147c59ff] {\n  left: 0;\n  background-image: url(\"https://alcs-slider.netlify.app/images/icon-prev.svg\");\n}\nhtml body main .slider .buttons .previous[data-v-147c59ff]:hover {\n  transform: scale(1.25);\n}\nhtml body main .slider .buttons .next[data-v-147c59ff] {\n  right: 0;\n  background-image: url(\"https://alcs-slider.netlify.app/images/icon-next.svg\");\n}\nhtml body main .slider .buttons .next[data-v-147c59ff]:hover {\n  transform: scale(1.25);\n}\nhtml body main .slider .slide[data-v-147c59ff] {\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column-reverse;\n}\nhtml body main .slider .slide .testimonial[data-v-147c59ff] {\n  padding: 32px 51px;\n  background-size: 60px;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-image: url(https://alcs-slider.netlify.app/images/pattern-quotes.svg);\n}\nhtml body main .slider .slide .testimonial blockquote[data-v-147c59ff] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 24px;\n  margin-bottom: 36px;\n}\nhtml body main .slider .slide .testimonial .author[data-v-147c59ff] {\n  font-size: 15px;\n  font-weight: 700;\n}\nhtml body main .slider .slide .testimonial .author span[data-v-147c59ff] {\n  display: block;\n  color: #babacf;\n  font-weight: 500;\n}\nhtml body main .slider .slide .slider-img[data-v-147c59ff] {\n  width: 100%;\n  padding: 30px;\n  display: flex;\n  margin-bottom: 40px;\n  align-items: center;\n  justify-content: center;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(https://alcs-slider.netlify.app/images/pattern-bg.svg);\n}\nhtml body main .slider .slide .slider-img img[data-v-147c59ff] {\n  width: 240px;\n  display: block;\n  border-radius: 10px;\n  box-shadow: 0px 16px 40px 0px rgba(135, 105, 210, 0.4);\n}\nhtml body main .slider .slide .active[data-v-147c59ff] {\n  opacity: 1;\n  transform: translateX(0) scale(1);\n  transition-delay: 0.4s;\n}\nhtml body footer[data-v-147c59ff] {\n  font-size: 11px;\n  text-align: center;\n}\nhtml body footer a[data-v-147c59ff] {\n  color: #3e52a3;\n}\nhtml body .hide[data-v-147c59ff] {\n  display: none;\n}\n@media screen and (min-width: 600px) {\nhtml body main[data-v-147c59ff] {\n    max-width: 800px;\n}\nhtml body main .slider .buttons[data-v-147c59ff] {\n    top: 280px;\n}\n}\n@media screen and (min-width: 900px) {\nhtml body main[data-v-147c59ff] {\n    width: 100%;\n    max-width: 1054px;\n    padding: 64px 64px 64px 0;\n}\nhtml body main .slider .buttons[data-v-147c59ff] {\n    right: 43%;\n    top: 500px;\n}\nhtml body main .slider .slide[data-v-147c59ff] {\n    position: relative;\n    text-align: left;\n    display: flex;\n    flex-direction: row;\n}\nhtml body main .slider .slide .testimonial[data-v-147c59ff] {\n    padding: 32px 0 0 0;\n    background-size: 80px;\n    background-position: 19% -7%;\n    transform: translateX(100px);\n}\nhtml body main .slider .slide .testimonial blockquote[data-v-147c59ff] {\n    font-size: 24px;\n    line-height: 30px;\n}\nhtml body main .slider .slide .testimonial .author span[data-v-147c59ff] {\n    display: contents;\n}\nhtml body main .slider .slide .slider-img[data-v-147c59ff] {\n    padding: 55px;\n}\nhtml body main .slider .slide .slider-img img[data-v-147c59ff] {\n    width: 400px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".we-provide[data-v-0789d93c] {\n  width: 100%;\n  background: #f2f2f2;\n  padding: 50px 0;\n  margin-bottom: 100px;\n}\n.we-provide__wrapper[data-v-0789d93c] {\n  max-width: 71rem;\n  padding: 0 40px;\n  margin: auto;\n}\n.we-provide__wrapper__head[data-v-0789d93c] {\n  color: #041B2BFF;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 1.375rem;\n  font-weight: bold;\n  line-height: 34px;\n  display: block;\n  margin-bottom: 8px;\n}\n.we-provide__wrapper__sub[data-v-0789d93c] {\n  margin-bottom: 3rem;\n  display: block;\n  max-width: 700px;\n}\n.we-provide__wrapper__content[data-v-0789d93c] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n.we-provide__wrapper__content__left[data-v-0789d93c] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 650px) {\n.we-provide__wrapper__content__left[data-v-0789d93c] {\n    flex-direction: column;\n}\n}\n.we-provide__wrapper__content__left__offer[data-v-0789d93c] {\n  display: grid;\n  grid-template-columns: 3.688rem auto;\n  margin-bottom: 18px;\n}\n@media screen and (max-width: 370px) {\n.we-provide__wrapper__content__left__offer[data-v-0789d93c] {\n    grid-template-columns: 2rem auto;\n}\n}\n.we-provide__wrapper__content__left__offer__check-mark-img[data-v-0789d93c] {\n  align-self: center;\n  grid-column: 1;\n  grid-row: 1;\n  height: 20px;\n  justify-self: left;\n  width: 20px;\n  align-self: auto;\n}\n@media screen and (min-width: 768px) {\n.we-provide__wrapper__content__left__offer__check-mark-img[data-v-0789d93c] {\n    height: 24px;\n    width: 24px;\n}\n}\n.we-provide__wrapper__content__left__offer__sub-headline[data-v-0789d93c] {\n  color: #041B2BFF;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  grid-column: 2;\n  grid-row: 1;\n  line-height: 24px;\n  margin: unset;\n}\n.we-provide__wrapper__content__left__offer .features-headline-checks[data-v-0789d93c] {\n  height: 1rem;\n}\n.we-provide__wrapper__content__left__offer__minor-text[data-v-0789d93c] {\n  color: #3D4F5C;\n  display: block;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  grid-column: 2;\n  grid-row: 2;\n  line-height: 24px;\n  margin: 0;\n}\n@media screen and (min-width: 992px) {\n.we-provide__wrapper__content__left__offer__minor-text[data-v-0789d93c] {\n    font-size: 14px;\n    width: 23.06rem;\n}\n}\n.we-provide__wrapper__content__right[data-v-0789d93c] {\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 650px) {\n.we-provide__wrapper__content__right[data-v-0789d93c] {\n    flex-direction: column;\n}\n}\n.invoicing-offer-wrapper[data-v-0789d93c] {\n  max-width: 47%;\n}\n@media screen and (max-width: 650px) {\n.invoicing-offer-wrapper[data-v-0789d93c] {\n    max-width: 100%;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home-top[data-v-00969a58] {\n  background-image: url(\"/assets/home/crowd.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.marketing[data-v-00969a58] {\n  align-content: center;\n  padding: 200px 20px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: linear-gradient(315deg, rgba(89, 5, 123, 0.5) 0%, rgba(68, 0, 111, 0.5) 74%);\n}\n.h1-verse[data-v-00969a58] {\n  color: #FFFFFF;\n  text-shadow: 2px 0px 17px #00000045;\n  font-size: 22px;\n  max-width: 450px;\n  text-align: center;\n  display: block;\n  margin: auto;\n  font-weight: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#our-mission[data-v-ff6d6dd8] {\n  width: 100%;\n  background: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/home/top-print.png\");\n}\n.who-are-we[data-v-ff6d6dd8] {\n  width: 100%;\n  padding: 40px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.who-are-we h1[data-v-ff6d6dd8] {\n  text-align: center;\n  color: rebeccapurple;\n  font-size: 45px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 3px;\n}\n.who-are-we p[data-v-ff6d6dd8] {\n  color: #3c3c3c;\n  font-size: 15px;\n  line-height: 25px;\n  text-align: center;\n  max-width: 450px;\n  margin: auto;\n}\n.three-circles[data-v-ff6d6dd8] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n}\n.three-circles .circle[data-v-ff6d6dd8] {\n  background: #f5f5f5;\n  min-width: 230px;\n  width: 230px;\n  height: 230px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin: 40px;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.7s;\n  position: relative;\n}\n.three-circles .circle[data-v-ff6d6dd8]:hover {\n  transform: scale(1.055);\n}\n.three-circles .circle-overlay[data-v-ff6d6dd8] {\n  background: #f5f5f5;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  opacity: 1;\n  transition: all 0.9s;\n  z-index: 1;\n}\n.three-circles .circle h3[data-v-ff6d6dd8] {\n  color: rebeccapurple;\n  font-size: 25px;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 0;\n  margin: 0;\n  transition: all 0.3s;\n  z-index: 3;\n}\n.three-circles .circle:hover h3[data-v-ff6d6dd8] {\n  color: #FFFFFF;\n}\n.three-circles .circle h4[data-v-ff6d6dd8] {\n  color: black;\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: 0;\n  margin: 0;\n  transition: all 0.3s;\n  margin-top: -5px;\n  z-index: 3;\n}\n.three-circles .circle:hover h4[data-v-ff6d6dd8] {\n  color: #FFFFFF;\n}\n.three-circles .circle:hover .circle-overlay[data-v-ff6d6dd8] {\n  background: rebeccapurple;\n}\n.three-circles .triangle[data-v-ff6d6dd8] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 10px 8.5px 0 8.5px;\n  border-color: #663399 transparent transparent transparent;\n  margin-top: 10px;\n  transition: all 0.3s;\n  z-index: 3;\n}\n.three-circles .circle:hover .triangle[data-v-ff6d6dd8] {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 10px 8.5px 0 8.5px;\n  border-color: #310e4c transparent transparent transparent;\n  margin-top: 10px;\n  transition: all 0.3s;\n  z-index: 3;\n}\n.three-circles a[data-v-ff6d6dd8] {\n  text-decoration: none !important;\n  color: inherit !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#bid-uur[data-v-7a0db4e2] {\n    max-width: 71rem;\n    display: flex;\n    padding: 0 40px;\n    margin: auto;\n}\n.sqs-block[data-v-7a0db4e2] {\n    position: relative;\n    height: auto;\n    padding-top: 17px;\n    padding-bottom: 17px;\n}\n[class*=sqs-col] .sqs-block[data-v-7a0db4e2] {\n    padding-left: 17px;\n    padding-right: 17px;\n}\n.sqs-block[data-v-7a0db4e2]:not(.sqs-block-html):not(.sqs-block-markdown) {\n    clear: both;\n}\n.sqs-layout:not(.sqs-editing) .sqs-row .sqs-block[data-v-7a0db4e2]:not(.float):not(.sqs-feature-gated-wrapper):first-child {\n    padding-top: 0;\n}\nfigure[data-v-7a0db4e2] {\n    display: block;\n    -webkit-margin-before: 1em;\n            margin-block-start: 1em;\n    -webkit-margin-after: 1em;\n            margin-block-end: 1em;\n    -webkit-margin-start: 40px;\n            margin-inline-start: 40px;\n    -webkit-margin-end: 40px;\n            margin-inline-end: 40px;\n}\narticle[data-v-7a0db4e2], aside[data-v-7a0db4e2], details[data-v-7a0db4e2], figcaption[data-v-7a0db4e2], figure[data-v-7a0db4e2], footer[data-v-7a0db4e2], header[data-v-7a0db4e2], hgroup[data-v-7a0db4e2], main[data-v-7a0db4e2], menu[data-v-7a0db4e2], nav[data-v-7a0db4e2], section[data-v-7a0db4e2], summary[data-v-7a0db4e2] {\n    display: block;\n}\nfigure[data-v-7a0db4e2] {\n    margin: 1em 40px;\n}\n.sqs-block-image .sqs-block-image-figure[data-v-7a0db4e2] {\n    margin: 0;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2[data-v-7a0db4e2] {\n    position: relative;\n    display: flex;\n    flex-direction: row-reverse;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2.reverse[data-v-7a0db4e2] {\n    flex-direction: row;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .intrinsic[data-v-7a0db4e2] {\n    position: relative;\n    max-width: initial !important;\n}\n.sqs-block-image .design-layout-card[data-v-7a0db4e2]:not(.sqs-narrow-width) > :first-child {\n    width: calc(55% - 0%);\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-inset[data-v-7a0db4e2] {\n    position: relative;\n}\n.sqs-block-image .design-layout-card .intrinsic img[data-v-7a0db4e2], .sqs-block-image .design-layout-overlap .intrinsic img[data-v-7a0db4e2], .sqs-block-image .design-layout-collage .intrinsic img[data-v-7a0db4e2], .sqs-block-image .design-layout-stack .intrinsic img[data-v-7a0db4e2] {\n    width: 100% !important;\n    height: auto !important;\n    position: static !important;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .intrinsic img[data-v-7a0db4e2] {\n    display: block;\n    width: 100%;\n}\n.sqs-block-image .design-layout-card .sqs-image-content[data-v-7a0db4e2]::after, .sqs-block-image .design-layout-card .image-overlay[data-v-7a0db4e2] {\n    background-color: rgba(0, 0, 0, .1);\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .sqs-image-content[data-v-7a0db4e2]::after, .sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-overlay[data-v-7a0db4e2] {\n    content: \"\";\n    display: block;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n/*-----------------------------------------------------*/\n.sqs-block-image .design-layout-card:not(.sqs-narrow-width).image-position-right .image-card-wrapper[data-v-7a0db4e2] {\n    margin-right: 0%;\n}\n.image-block-card-content-position-center .sqs-block-image .design-layout-card .image-card-wrapper[data-v-7a0db4e2] {\n    align-items: center;\n}\n.sqs-block-image .design-layout-card:not(.sqs-narrow-width) .image-card-wrapper[data-v-7a0db4e2] {\n    display: flex;\n    align-items: center;\n    -ms-justify-content: center;\n    justify-content: center;\n    min-height: 100%;\n}\n.sqs-block-image .design-layout-card:not(.sqs-narrow-width) .image-card-wrapper[data-v-7a0db4e2] {\n    position: relative;\n    width: calc(45% - 0%);\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card-wrapper[data-v-7a0db4e2] {\n    z-index: 2;\n    pointer-events: none;\n}\n.sqs-block-image .design-layout-card .image-card-wrapper[data-v-7a0db4e2] {\n    background-color: #f0f0f0;\n}\narticle[data-v-7a0db4e2], aside[data-v-7a0db4e2], details[data-v-7a0db4e2], figcaption[data-v-7a0db4e2], figure[data-v-7a0db4e2], footer[data-v-7a0db4e2], header[data-v-7a0db4e2], hgroup[data-v-7a0db4e2], main[data-v-7a0db4e2], menu[data-v-7a0db4e2], nav[data-v-7a0db4e2], section[data-v-7a0db4e2], summary[data-v-7a0db4e2] {\n    display: block;\n}\nfigcaption[data-v-7a0db4e2] {\n    display: block;\n}\n\n/*-----------------------------------------------------*/\n.sqs-block-image .design-layout-card:not(.sqs-narrow-width) .image-card[data-v-7a0db4e2] {\n    position: relative;\n    width: 100%;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card[data-v-7a0db4e2] {\n    pointer-events: auto;\n}\n.sqs-block-image .design-layout-card .image-card[data-v-7a0db4e2] {\n    padding: 10% 0;\n}\n\n/*-----------------------------------------------------*/\n.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-title-wrapper[data-v-7a0db4e2] {\n    font-size: 8vw;\n}\n.image-block-card-text-alignment-left .sqs-block-image .design-layout-card .image-card > *[data-v-7a0db4e2] {\n    text-align: left !important;\n}\n.sqs-block-image .design-layout-card .image-title-wrapper[data-v-7a0db4e2], .sqs-block-image .design-layout-card .image-subtitle-wrapper[data-v-7a0db4e2], .sqs-block-image .design-layout-card .image-button-wrapper[data-v-7a0db4e2] {\n    padding: 0 10%;\n}\n\n/*-----------------------------------------------------*/\n.sqs-dynamic-text[data-v-7a0db4e2] {\n    min-width: 100%;\n    line-height: 1em;\n}\n\n/*-----------------------------------------------------*/\n.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-title p[data-v-7a0db4e2] {\n    font-family: proxima-nova;\n    font-weight: 900;\n    font-style: normal;\n    letter-spacing: 0em;\n    text-transform: none;\n    line-height: 1.1em;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-title p[data-v-7a0db4e2] {\n    display: inline;\n    margin: 0;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n}\n.sqs-block-image .design-layout-card .image-title p[data-v-7a0db4e2] {\n    background-color: rgba(255, 255, 255, 0);\n    color: #000;\n    box-shadow: 0.5em 0 0 rgb(255 255 255 / 0%), -0.5em 0 0 rgb(255 255 255 / 0%);\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 p[data-v-7a0db4e2] {\n    font-size: inherit;\n}\np[data-v-7a0db4e2]:last-child {\n    margin-bottom: 0;\n}\np[data-v-7a0db4e2]:first-child {\n    margin-top: 0;\n}\n\n/*-----------------------------------------------------*/\n.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-subtitle-wrapper[data-v-7a0db4e2] {\n    font-size: 4vw;\n}\n.image-block-card-text-alignment-left .sqs-block-image .design-layout-card .image-card > *[data-v-7a0db4e2] {\n    text-align: left !important;\n}\n.sqs-block-image .design-layout-card .image-title-wrapper[data-v-7a0db4e2], .sqs-block-image .design-layout-card .image-subtitle-wrapper[data-v-7a0db4e2], .sqs-block-image .design-layout-card .image-button-wrapper[data-v-7a0db4e2] {\n    padding: 0 10%;\n}\n\n/*-----------------------------------------------------*/\n.sqs-block-image .design-layout-card .image-title-wrapper + .image-subtitle-wrapper .image-subtitle[data-v-7a0db4e2] {\n    margin-top: 5%;\n}\n.sqs-dynamic-text[data-v-7a0db4e2] {\n    min-width: 100%;\n    line-height: 1em;\n}\n\n/*-----------------------------------------------------*/\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-subtitle p[data-v-7a0db4e2]:last-child {\n    margin-bottom: 0;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-subtitle p[data-v-7a0db4e2]:first-child {\n    margin-top: 0;\n}\n.image-block-card-dynamic-font-sizing .sqs-block-image .design-layout-card .image-subtitle p[data-v-7a0db4e2] {\n    font-weight: 300;\n    font-style: normal;\n    letter-spacing: 0em;\n    text-transform: none;\n    line-height: 1.6em;\n}\n\n/*-----------------------------------------------------*/\n.sqs-block-image .image-block-outer-wrapper.design-layout-card .image-button-wrapper[data-v-7a0db4e2] {\n    margin-top: 5%;\n    font-size: 2.8vw;\n}\n.image-block-card-text-alignment-left .sqs-block-image .design-layout-card .image-card > *[data-v-7a0db4e2] {\n    text-align: left !important;\n}\n\n/*-----------------------------------------------------*/\n.sqs-dynamic-text[data-v-7a0db4e2] {\n    min-width: 100%;\n    line-height: 1em;\n}\n\n/*-----------------------------------------------------*/\n.min-font-set[data-v-7a0db4e2], .min-font-set ~ *[data-v-7a0db4e2] {\n    font-size: 13px !important;\n}\n\n/*-----------------------------------------------------*/\nbody.image-block-card-dynamic-font-sizing .sqs-block-image .image-block-outer-wrapper.design-layout-card a[data-v-7a0db4e2] {\n    font-size: inherit !important;\n}\n.sqs-block-image .image-block-outer-wrapper.design-layout-card .image-button a[data-v-7a0db4e2] {\n    display: inline-block;\n    padding: .6em 1.5em;\n    border: 2px solid #f93a24;\n    background-color: rgba(0, 0, 0, 0);\n    font-size: 14px;\n    font-weight: 600;\n    font-style: normal;\n    letter-spacing: .1em;\n    line-height: .9em;\n    text-transform: uppercase;\n    color: #f93a24;\n    border-radius: 0;\n    transition: all 0.3s ease;\n}\n.sqs-block-image .image-block-outer-wrapper.design-layout-card .image-button a[data-v-7a0db4e2]:hover {\n    background-color: #f93a24;\n    color: #ffffff;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card a[data-v-7a0db4e2], .sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card a[data-v-7a0db4e2]:hover {\n    text-decoration: none;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-card a[data-v-7a0db4e2] {\n    display: inline;\n}\n\n/*-----------------------------------------------------*/\n.sqs-block-image .design-layout-card[data-v-7a0db4e2]:not(.sqs-narrow-width):after {\n    content: \"\";\n    display: block;\n    clear: both;\n}\n#prayer-meeting[data-v-7a0db4e2] {\n    font-size: 32px;\n    font-weight: bold;\n}\n.image-title .sqs-dynamic-text[data-v-7a0db4e2] {\n    line-height: unset;\n}\n.sqs-block-image .design-layout-card .image-title-wrapper[data-v-6e8967a0][data-v-7a0db4e2], .sqs-block-image .design-layout-card .image-subtitle-wrapper[data-v-6e8967a0][data-v-7a0db4e2], .sqs-block-image .design-layout-card .image-button-wrapper[data-v-6e8967a0][data-v-7a0db4e2] {\n    padding: 0 30px;\n}\n.sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-title p[data-v-6e8967a0][data-v-7a0db4e2], .sqs-block-image .image-block-outer-wrapper.image-block-v2 .image-subtitle p[data-v-6e8967a0][data-v-7a0db4e2] {\n    white-space: unset;\n}\n#sub-heading[data-v-7a0db4e2] {\n    margin-bottom: 8px;\n    display: block;\n}\n#body[data-v-7a0db4e2] {\n    line-height: 20px;\n}\n/*-----------------------------------------------------*/\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Components/Widgets/EventCard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Components/Widgets/EventCard.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventCard_vue_vue_type_template_id_7a0db4e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true& */ "./resources/js/Components/Widgets/EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true&");
/* harmony import */ var _EventCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventCard.vue?vue&type=script&lang=js& */ "./resources/js/Components/Widgets/EventCard.vue?vue&type=script&lang=js&");
/* harmony import */ var _EventCard_vue_vue_type_style_index_0_id_7a0db4e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css& */ "./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _EventCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EventCard_vue_vue_type_template_id_7a0db4e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EventCard_vue_vue_type_template_id_7a0db4e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a0db4e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Widgets/EventCard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Widgets/Testimonials.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Widgets/Testimonials.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Testimonials_vue_vue_type_template_id_147c59ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=template&id=147c59ff&scoped=true& */ "./resources/js/Components/Widgets/Testimonials.vue?vue&type=template&id=147c59ff&scoped=true&");
/* harmony import */ var _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=script&lang=js& */ "./resources/js/Components/Widgets/Testimonials.vue?vue&type=script&lang=js&");
/* harmony import */ var _Testimonials_vue_vue_type_style_index_0_id_147c59ff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss& */ "./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Testimonials_vue_vue_type_template_id_147c59ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Testimonials_vue_vue_type_template_id_147c59ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "147c59ff",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Widgets/Testimonials.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Widgets/VisieMisie.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Widgets/VisieMisie.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisieMisie_vue_vue_type_template_id_0789d93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true& */ "./resources/js/Components/Widgets/VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true&");
/* harmony import */ var _VisieMisie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisieMisie.vue?vue&type=script&lang=js& */ "./resources/js/Components/Widgets/VisieMisie.vue?vue&type=script&lang=js&");
/* harmony import */ var _VisieMisie_vue_vue_type_style_index_0_id_0789d93c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss& */ "./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _VisieMisie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VisieMisie_vue_vue_type_template_id_0789d93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _VisieMisie_vue_vue_type_template_id_0789d93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0789d93c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Widgets/VisieMisie.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/general/HeroBanner.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/general/HeroBanner.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HeroBanner_vue_vue_type_template_id_00969a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroBanner.vue?vue&type=template&id=00969a58&scoped=true& */ "./resources/js/Components/general/HeroBanner.vue?vue&type=template&id=00969a58&scoped=true&");
/* harmony import */ var _HeroBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroBanner.vue?vue&type=script&lang=js& */ "./resources/js/Components/general/HeroBanner.vue?vue&type=script&lang=js&");
/* harmony import */ var _HeroBanner_vue_vue_type_style_index_0_id_00969a58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss& */ "./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _HeroBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HeroBanner_vue_vue_type_template_id_00969a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _HeroBanner_vue_vue_type_template_id_00969a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "00969a58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/general/HeroBanner.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Tuis.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Tuis.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tuis_vue_vue_type_template_id_ff6d6dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true& */ "./resources/js/Pages/Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true&");
/* harmony import */ var _Tuis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tuis.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Tuis.vue?vue&type=script&lang=js&");
/* harmony import */ var _Tuis_vue_vue_type_style_index_0_id_ff6d6dd8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss& */ "./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Tuis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Tuis_vue_vue_type_template_id_ff6d6dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tuis_vue_vue_type_template_id_ff6d6dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ff6d6dd8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Tuis.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Widgets/EventCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/Widgets/EventCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Widgets/Testimonials.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Widgets/Testimonials.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Testimonials.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Widgets/VisieMisie.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Widgets/VisieMisie.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisieMisie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/general/HeroBanner.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/general/HeroBanner.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Tuis.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Tuis.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tuis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Widgets/EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Components/Widgets/EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_template_id_7a0db4e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_template_id_7a0db4e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_template_id_7a0db4e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/Widgets/Testimonials.vue?vue&type=template&id=147c59ff&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Widgets/Testimonials.vue?vue&type=template&id=147c59ff&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_147c59ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_147c59ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_template_id_147c59ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Testimonials.vue?vue&type=template&id=147c59ff&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=template&id=147c59ff&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/Widgets/VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/Widgets/VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_template_id_0789d93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_template_id_0789d93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_template_id_0789d93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/general/HeroBanner.vue?vue&type=template&id=00969a58&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Components/general/HeroBanner.vue?vue&type=template&id=00969a58&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_template_id_00969a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_template_id_00969a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_template_id_00969a58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroBanner.vue?vue&type=template&id=00969a58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=template&id=00969a58&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_template_id_ff6d6dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_template_id_ff6d6dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_template_id_ff6d6dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_147c59ff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_147c59ff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_147c59ff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_147c59ff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Testimonials_vue_vue_type_style_index_0_id_147c59ff_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_style_index_0_id_0789d93c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_style_index_0_id_0789d93c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_style_index_0_id_0789d93c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_style_index_0_id_0789d93c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VisieMisie_vue_vue_type_style_index_0_id_0789d93c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_id_00969a58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_id_00969a58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_id_00969a58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_id_00969a58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_id_00969a58_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_style_index_0_id_ff6d6dd8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_style_index_0_id_ff6d6dd8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_style_index_0_id_ff6d6dd8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_style_index_0_id_ff6d6dd8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tuis_vue_vue_type_style_index_0_id_ff6d6dd8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_style_index_0_id_7a0db4e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_style_index_0_id_7a0db4e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_style_index_0_id_7a0db4e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_style_index_0_id_7a0db4e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventCard_vue_vue_type_style_index_0_id_7a0db4e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=template&id=7a0db4e2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "bid-uur" } }, [
    _c(
      "div",
      {
        staticClass: "sqs-block image-block sqs-block-image sqs-text-ready",
        attrs: {
          "data-block-type": "5",
          id: "block-yui_3_17_2_1_1590023071736_19469"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "sqs-block-content",
            attrs: { id: "yui_3_17_2_1_1621340746945_121" }
          },
          [
            _c(
              "figure",
              {
                staticClass:
                  "sqs-block-image-figure image-block-outer-wrapper image-block-v2 design-layout-card combination-animation-none individual-animation-none individual-text-animation-none image-position-right image-linked sqs-text-ready",
                class: [_vm.reverse && "reverse"],
                attrs: {
                  "data-scrolled": "",
                  "data-test": "image-block-v2-outer-wrapper",
                  id: "yui_3_17_2_1_1621340746945_120"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "intrinsic",
                    attrs: { id: "yui_3_17_2_1_1621340746945_119" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "image-inset content-fit",
                        attrs: { id: "yui_3_17_2_1_1621340746945_118" }
                      },
                      [
                        _c("img", {
                          staticClass: "loaded",
                          staticStyle: {
                            left: "0px",
                            top: "0.0286444px",
                            width: "730px",
                            height: "486.943px",
                            position: "absolute"
                          },
                          attrs: { alt: "Prayer.jpg", src: _vm.image }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "image-overlay" })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "figcaption",
                  {
                    staticClass: "image-card-wrapper",
                    attrs: { "data-width-ratio": "" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "image-card sqs-dynamic-text-container" },
                      [
                        _c("div", { staticClass: "image-title-wrapper" }, [
                          _c(
                            "div",
                            { staticClass: "image-title sqs-dynamic-text" },
                            [
                              _c("p", { attrs: { id: "prayer-meeting" } }, [
                                _vm._v(_vm._s(_vm.heading))
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "image-subtitle-wrapper" }, [
                          _c(
                            "div",
                            {
                              staticClass: "image-subtitle sqs-dynamic-text",
                              attrs: { "data-width-percentage": "31.7" }
                            },
                            [
                              _c("p", [
                                _c("strong", { attrs: { id: "sub-heading" } }, [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm.subHeading) +
                                      "\n                                        "
                                  ),
                                  _c("br")
                                ]),
                                _vm._v(" "),
                                _c("span", {
                                  attrs: { id: "body" },
                                  domProps: { innerHTML: _vm._s(_vm.body) }
                                })
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "image-button-wrapper" }, [
                          _c(
                            "div",
                            {
                              staticClass: "image-button sqs-dynamic-text",
                              attrs: { "data-width-percentage": "31.7" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "image-button-inner min-font-set"
                                },
                                [
                                  _c("a", { attrs: { href: _vm.link } }, [
                                    _vm._v(_vm._s(_vm.linkText))
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=template&id=147c59ff&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=template&id=147c59ff&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "testimonial-section" } }, [
    _c("main", [
      _c(
        "div",
        { staticClass: "slider" },
        [
          _c("div", { staticClass: "buttons" }, [
            _c("div", {
              staticClass: "previous",
              on: {
                click: function($event) {
                  return _vm.prevSlide()
                }
              }
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "next",
              on: {
                click: function($event) {
                  return _vm.nextSlide()
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm._l(_vm.testimonials, function(item, index) {
            return _c("div", { key: index, staticClass: "slide" }, [
              _c("div", { staticClass: "testimonial" }, [
                _c("blockquote", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(item.quote) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "author" }, [_vm._v(_vm._s(item.name))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "slider-img" }, [
                _c("img", { attrs: { src: item.image, alt: "Author Image" } })
              ])
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=template&id=0789d93c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
    return _c("div", { staticClass: "we-provide token-margin-keeper" }, [
      _c("div", { staticClass: "we-provide__wrapper secondary-max-width" }, [
        _c("h2", { staticClass: "we-provide__wrapper__head" }, [
          _vm._v("\n                Opskrif vir visie en misie\n            ")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "we-provide__wrapper__sub" }, [
          _vm._v(
            "\n                Klein paragraaf om die inhoud oor te bring\n            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "we-provide__wrapper__content" }, [
          _c("div", { staticClass: "we-provide__wrapper__content__left" }, [
            _c("div", { staticClass: "invoicing-offer-wrapper" }, [
              _c(
                "div",
                { staticClass: "we-provide__wrapper__content__left__offer" },
                [
                  _c("img", {
                    staticClass:
                      "we-provide__wrapper__content__left__offer__check-mark-img",
                    attrs: {
                      src: "/assets/components/Check-mark.svg",
                      alt: "Check mart"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "h3",
                    {
                      staticClass:
                        "we-provide__wrapper__content__left__offer__sub-headline extra-long-heading-bg features-headline-checks"
                    },
                    [
                      _vm._v(
                        "\n                                Visie\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "we-provide__wrapper__content__left__offer__minor-text"
                    },
                    [
                      _vm._v(
                        "\n                                Om as gemeente in gehoorsaamheid teenoor God uitvoering te gee aan die "
                      ),
                      _c("strong", [_vm._v("GROOT GEBOD")]),
                      _vm._v(" end die "),
                      _c("strong", [_vm._v("GROOT OPDRAG")])
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "invoicing-offer-wrapper" }, [
              _c(
                "div",
                { staticClass: "we-provide__wrapper__content__left__offer" },
                [
                  _c("img", {
                    staticClass:
                      "we-provide__wrapper__content__left__offer__check-mark-img",
                    attrs: {
                      src: "/assets/components/Check-mark.svg",
                      alt: "Check mart"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "h3",
                    {
                      staticClass:
                        "we-provide__wrapper__content__left__offer__sub-headline extra-long-heading-bg features-headline-checks"
                    },
                    [
                      _vm._v(
                        "\n                                Misie\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "we-provide__wrapper__content__left__offer__minor-text"
                    },
                    [
                      _vm._v(
                        "\n                                Om in die Koningkryk van God uit te bou deur mense tot bekeering in Jesus Christus te lei en hulle dan te leer om 'n dissipel te word wat die voorbeeld van Jesus uitleef.\n                            "
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=template&id=00969a58&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=template&id=00969a58&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home-top" }, [
    _c("div", { staticClass: "marketing" }, [
      _c("h1", { staticClass: "h1-verse" }, [
        _vm._v("\n            " + _vm._s(_vm.text) + "\n        ")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=template&id=ff6d6dd8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c("HeroBanner", {
        attrs: {
          text:
            "Iemand roep in die woestyn: Maak die pad vir die Here gereed, maak die paaie vir Hom reguit."
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("VisieMisie"),
      _vm._v(" "),
      _c("EventCard", {
        attrs: {
          body:
            "  Elke Maandag - Frydag om <strong>8:00</strong>, <strong>12:00</strong>,\n                en <strong>18:30</strong>, ons bid saam en is ook aanlyn beskikbaar tydens\n                ons byeenkomste, so maak nie saak waar jy is nie, ons moedig U aan om 'n tydjie uit te sit om saam te bid\n                en loof te gee as 'n gemeente.",
          heading: "Bid Uur",
          subHeading: "Bid saam by die kerk of aanlyn!",
          linkText: "Bid Uur",
          link: "/",
          image:
            "https://images.squarespace-cdn.com/content/v1/58eba8d3725e255182484880/1611853076022-C288NADWOB9PV5SOS93I/ke17ZwdGBToddI8pDm48kBl4YCNUOkrKYQ4p1H4jLnZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ua0RCRIEXQSuPz5RnEM2QpCGlrhZInH2mIdVOLiRr-BZmfDfC9hcJ_CV9QBm_ln3EA/Prayer.jpg?format=1000w"
        }
      }),
      _vm._v(" "),
      _c("EventCard", {
        attrs: {
          reverse: "",
          body:
            "  Elke Maandag - Frydag om <strong>8:00</strong>, <strong>12:00</strong>,\n                en <strong>18:30</strong>, ons bid saam en is ook aanlyn beskikbaar tydens\n                ons byeenkomste, so maak nie saak waar jy is nie, ons moedig U aan om 'n tydjie uit te sit om saam te bid\n                en loof te gee as 'n gemeente.",
          heading: "Nog 'n byeenkoms",
          subHeading: "'n Mooi inleiding",
          linkText: "Kliek hier",
          link: "/",
          image: "/assets/wie-is-ons/past.jpg"
        }
      }),
      _vm._v(" "),
      _c("Testimonials")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "who-are-we", attrs: { id: "our-mission" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "mission-content wow fadeInLeft" }, [
            _c("h1", [_vm._v("Wie is ons")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Ons is 'n kerk wat mense met God in aanraaking bring. Ons help hulle groei in 'n gesonde sterk\n                    verhouding met Hom en om 'n lewe vol goedhartigheid te leef."
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "three-circles" }, [
              _c("a", { attrs: { href: "/" } }, [
                _c("div", { staticClass: "circle one" }, [
                  _c("span", { staticClass: "circle-overlay" }),
                  _vm._v(" "),
                  _c("h3", [_vm._v("Ruik uit")]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("na God")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "triangle" })
                ])
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/" } }, [
                _c("div", { staticClass: "circle two" }, [
                  _c("span", { staticClass: "circle-overlay" }),
                  _vm._v(" "),
                  _c("h3", [_vm._v("Bou")]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("verhoudinge")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "triangle" })
                ])
              ]),
              _vm._v(" "),
              _c("a", { attrs: { href: "/" } }, [
                _c("div", { staticClass: "circle three" }, [
                  _c("span", { staticClass: "circle-overlay" }),
                  _vm._v(" "),
                  _c("h3", [_vm._v("Gee")]),
                  _vm._v(" "),
                  _c("h4", [_vm._v("mildelik")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "triangle" })
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/Testimonials.vue?vue&type=style&index=0&id=147c59ff&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0cbfb747", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/VisieMisie.vue?vue&type=style&index=0&id=0789d93c&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e8c9c8fe", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/general/HeroBanner.vue?vue&type=style&index=0&id=00969a58&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("33d4f943", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Tuis.vue?vue&type=style&index=0&id=ff6d6dd8&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("16737d4b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Widgets/EventCard.vue?vue&type=style&index=0&id=7a0db4e2&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("364215e5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);