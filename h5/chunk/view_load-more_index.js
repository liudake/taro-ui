(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"102":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=n(62),a=_interopRequireDefault(n(63)),u=_interopRequireDefault(n(65)),l=_interopRequireDefault(n(76)),s=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var f=function(e){function AtActivityIndicator(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtActivityIndicator),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtActivityIndicator.__proto__||Object.getPrototypeOf(AtActivityIndicator)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtActivityIndicator,s.default),o(AtActivityIndicator,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,o=e.mode,a=e.content,s=(0,u.default)("at-activity-indicator",{"at-activity-indicator--center":"center"===o},this.props.className);return r.default.createElement(i.View,{"className":s},r.default.createElement(i.View,{"className":"at-activity-indicator__body"},r.default.createElement(l.default,{"size":n,"color":t})),a&&r.default.createElement(i.Text,{"className":"at-activity-indicator__content"},a))}}]),AtActivityIndicator}();t.default=f,f.defaultProps={"size":24,"mode":"","color":"#6190E8","content":"","className":""},f.propTypes={"size":a.default.number,"mode":a.default.string,"color":a.default.string,"content":a.default.string,"className":a.default.oneOfType([a.default.array,a.default.string])}},"151":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=n(62),a=_interopRequireDefault(n(63)),u=_interopRequireDefault(n(65)),l=_interopRequireDefault(n(102)),s=_interopRequireDefault(n(81)),f=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function AtLoadMore(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoadMore),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoadMore.__proto__||Object.getPrototypeOf(AtLoadMore)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoadMore,f.default),o(AtLoadMore,[{"key":"onClick","value":function onClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.customStyle,o=e.loadingText,a=e.moreText,f=e.status,c=e.moreBtnStyle,p=e.noMoreTextStyle,d=e.noMoreText,y=null;return y="loading"===f?r.default.createElement(l.default,{"mode":"center","content":o}):"more"===f?r.default.createElement(s.default,{"full":!0,"onClick":this.onClick.bind(this),"customStyle":c},a):r.default.createElement(i.Text,{"className":"at-load-more__tip","style":p},d),r.default.createElement(i.View,{"className":(0,u.default)("at-load-more",t),"style":n},y)}}]),AtLoadMore}();t.default=c,c.defaultProps={"customStyle":"","className":"","noMoreTextStyle":"","moreBtnStyle":"","status":"more","loadingText":"加载中","moreText":"查看更多","noMoreText":"没有更多","onClick":function onClick(){}},c.propTypes={"customStyle":a.default.oneOfType([a.default.object,a.default.string]),"className":a.default.oneOfType([a.default.array,a.default.string]),"noMoreTextStyle":a.default.oneOfType([a.default.object,a.default.string]),"moreBtnStyle":a.default.oneOfType([a.default.object,a.default.string]),"status":a.default.oneOf(["more","loading","noMore"]),"loadingText":a.default.string,"moreText":a.default.string,"noMoreText":a.default.string,"onClick":a.default.func}},"152":function(e,t,n){},"23":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(2)),a=n(62),u=_interopRequireDefault(n(151)),l=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(152);var s=function(e){function LoadMorePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LoadMorePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(LoadMorePage.__proto__||Object.getPrototypeOf(LoadMorePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"status":"more"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(LoadMorePage,r.default.Component),o(LoadMorePage,[{"key":"handleClick","value":function handleClick(){var e=this;this.setState({"status":"loading"}),setTimeout(function(){e.setState({"status":"noMore"})},2e3)}},{"key":"render","value":function render(){return i.default.createElement(a.View,{"className":"page"},i.default.createElement(l.default,{"title":"LoadMore 页面提示"}),i.default.createElement(a.View,{"className":"doc-body"},i.default.createElement(a.View,{"className":"panel"},i.default.createElement(a.View,{"className":"panel__title"},"一般用法"),i.default.createElement(a.View,{"className":"panel__content no-padding"},i.default.createElement(u.default,{"onClick":this.handleClick.bind(this),"status":this.state.status})))))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}}]),LoadMorePage}();t.default=s},"62":function(e,t,n){e.exports=n(0)(18)},"63":function(e,t,n){e.exports=n(66)()},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(1);_interopRequireDefault(i),_interopRequireDefault(n(2));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var a=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},u=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,i.Component),o(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":r(e))&&t&&"object"===(void 0===t?"undefined":r(t))?Object.assign({},e,t):a(e)+a(t)}}]),AtComponent}();u.options={"addGlobalClass":!0},t.default=u},"65":function(e,t,n){e.exports=n(0)(19)},"66":function(e,t,n){"use strict";var o=n(67);function emptyFunction(){}e.exports=function(){function shim(e,t,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim};return e.checkPropTypes=emptyFunction,e.PropTypes=e,e}},"67":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(1),i=(_interopRequireDefault(r),_interopRequireDefault(n(2))),a=_interopRequireDefault(n(63)),u=n(62);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var l=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(u.View,{"className":"doc-header"},i.default.createElement(u.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=l,l.defaultProps={"title":"标题"},l.propTypes={"title":a.default.string}},"69":function(e,t,n){},"76":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=(_interopRequireDefault(n(1)),_interopRequireDefault(n(2))),i=_interopRequireDefault(n(63)),a=n(62),u=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,u.default),o(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,o={"width":n+"px","height":n+"px"},i={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},u=Object.assign({},i,o);return r.default.createElement(a.View,{"className":"at-loading","style":o},r.default.createElement(a.View,{"className":"at-loading__ring","style":u}),r.default.createElement(a.View,{"className":"at-loading__ring","style":u}),r.default.createElement(a.View,{"className":"at-loading__ring","style":u}))}}]),AtLoading}();t.default=l,l.defaultProps={"size":"18","color":"#fff"},l.propTypes={"size":i.default.oneOfType([i.default.string,i.default.number]),"color":i.default.oneOfType([i.default.string,i.default.number])}},"81":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=_interopRequireDefault(n(1)),i=_interopRequireDefault(n(2)),a=n(62),u=_interopRequireDefault(n(63)),l=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(76)),f=_interopRequireDefault(n(64));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var c={"normal":"normal","small":"small"},p={"primary":"primary","secondary":"secondary"},d=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={"isWEB":r.default.getEnv()===r.default.ENV_TYPE.WEB,"isWEAPP":r.default.getEnv()===r.default.ENV_TYPE.WEAPP,"isALIPAY":r.default.getEnv()===r.default.ENV_TYPE.ALIPAY},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,f.default),o(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"onGetUserInfo","value":function onGetUserInfo(){var e;this.props.onGetUserInfo&&(e=this.props).onGetUserInfo.apply(e,arguments)}},{"key":"onContact","value":function onContact(){var e;this.props.onContact&&(e=this.props).onContact.apply(e,arguments)}},{"key":"onGetPhoneNumber","value":function onGetPhoneNumber(){var e;this.props.onGetPhoneNumber&&(e=this.props).onGetPhoneNumber.apply(e,arguments)}},{"key":"onError","value":function onError(){var e;this.props.onError&&(e=this.props).onError.apply(e,arguments)}},{"key":"onOpenSetting","value":function onOpenSetting(){var e;this.props.onOpenSetting&&(e=this.props).onOpenSetting.apply(e,arguments)}},{"key":"onSumit","value":function onSumit(){this.state.isWEAPP&&this.$scope.triggerEvent("submit",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"onReset","value":function onReset(){this.state.isWEAPP&&this.$scope.triggerEvent("reset",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"render","value":function render(){var e,t=this.props,n=t.size,o=void 0===n?"normal":n,r=t.type,u=void 0===r?"":r,f=t.circle,d=t.full,y=t.loading,b=t.disabled,m=t.customStyle,h=t.formType,_=t.openType,g=t.lang,v=t.sessionFrom,P=t.sendMessageTitle,O=t.sendMessagePath,w=t.sendMessageImg,E=t.showMessageCard,C=t.appParameter,T=this.state,j=T.isWEAPP,R=T.isALIPAY,k=["at-button"],S=(_defineProperty(e={},"at-button--"+c[o],c[o]),_defineProperty(e,"at-button--disabled",b),_defineProperty(e,"at-button--"+u,p[u]),_defineProperty(e,"at-button--circle",f),_defineProperty(e,"at-button--full",d),e),A="primary"===u?"#fff":"#6190E8",M="small"===o?"16":"18",D=void 0;y&&(D=i.default.createElement(a.View,{"className":"at-button__icon"},i.default.createElement(s.default,{"color":A,"size":M})),k.push("at-button--icon"));var N=i.default.createElement(a.Button,{"className":"at-button__wxbutton","formType":h,"openType":_,"lang":g,"sessionFrom":v,"sendMessageTitle":P,"sendMessagePath":O,"sendMessageImg":w,"showMessageCard":E,"appParameter":C,"onGetUserInfo":this.onGetUserInfo.bind(this),"onGetPhoneNumber":this.onGetPhoneNumber.bind(this),"onOpenSetting":this.onOpenSetting.bind(this),"onError":this.onError.bind(this),"onContact":this.onContact.bind(this)});return i.default.createElement(a.View,{"className":(0,l.default)(k,S,this.props.className),"style":m,"onClick":this.onClick.bind(this)},j&&!b&&i.default.createElement(a.Form,{"reportSubmit":!0,"onSubmit":this.onSumit.bind(this),"onReset":this.onReset.bind(this)},N),R&&!b&&N,D,i.default.createElement(a.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=d,d.defaultProps={"size":"normal","type":"","circle":!1,"full":!1,"loading":!1,"disabled":!1,"customStyle":{},"onClick":function onClick(){},"formType":"","openType":"","lang":"en","sessionFrom":"","sendMessageTitle":"","sendMessagePath":"","sendMessageImg":"","showMessageCard":!1,"appParameter":"","onGetUserInfo":function onGetUserInfo(){},"onContact":function onContact(){},"onGetPhoneNumber":function onGetPhoneNumber(){},"onError":function onError(){},"onOpenSetting":function onOpenSetting(){}},d.propTypes={"size":u.default.oneOf(["normal","small"]),"type":u.default.oneOf(["primary","secondary",""]),"circle":u.default.bool,"full":u.default.bool,"loading":u.default.bool,"disabled":u.default.bool,"onClick":u.default.func,"customStyle":u.default.oneOfType([u.default.object,u.default.string]),"formType":u.default.oneOf(["submit","reset",""]),"openType":u.default.oneOf(["contact","share","getUserInfo","getPhoneNumber","launchApp","openSetting","feedback","getRealnameAuthInfo",""]),"lang":u.default.string,"sessionFrom":u.default.string,"sendMessageTitle":u.default.string,"sendMessagePath":u.default.string,"sendMessageImg":u.default.string,"showMessageCard":u.default.bool,"appParameter":u.default.string,"onGetUserInfo":u.default.func,"onContact":u.default.func,"onGetPhoneNumber":u.default.func,"onError":u.default.func,"onOpenSetting":u.default.func}}}]);