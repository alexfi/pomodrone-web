/**
* Quick & dirty browser sniff to detect mobile devices.
*/

var html = document.getElementsByTagName('html')[0];
var staticClass = 'static-site'
var dynamicClass = 'dynamic-site'

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/IEMobile/i) ||
  navigator.userAgent.match(/Opera Mini/i)
) {
  window.isMobile = true;
}

var addClass = window.isMobile ? staticClass : dynamicClass;
html.className += html.className ? ' ' + addClass : addClass;
