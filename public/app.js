'use strict'

var emailElements = document.getElementsByClassName('email');
var phoneElements = document.getElementsByClassName('phone');
var items = document.getElementsByClassName('item');

function toggleList(val) {

  if (val === 'phone') {
    hide('email');
    show('phone');

  } else if (val === 'email'){
    hide('phone');
    show('email');
  }
}

function show(name) {
  var element = name === 'email' ? emailElements : phoneElements;
  for (var i = 0; i < element.length; i++) {
    element[i].style.display = 'inline-block';
  }
}

function hide(name) {
  var element = name === 'email' ? emailElements : phoneElements;
  for (var i = 0; i < element.length; i++) {
    element[i].style.display = 'none';
  }
}

function val() {
  var value = document.getElementById('dropdown-list').value;
  toggleList(value);
}

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', activate);
}

function activate() {
  var item = this;
  var name = item.getElementsByClassName('name')[0];
  var fullData = item.getElementsByClassName('full_data')[0];
  var fadeOut = document.getElementsByClassName('fadeout')[0];
  var emailPhone = item.getElementsByClassName('email_phone_container')[0];

  if (item.classList.contains('active')) {
    removeC(fullData,'expand');
    addC(fullData,'contract');
    setTimeout(function(){
      removeC(name,'active');
      removeC(fullData,'active');
      removeC(fullData,'show');
      addC(fadeOut,'hide');
      removeC(emailPhone,'hide');
      removeC(item,'active');
      removeC(fullData,'contract');
    }, 800);
  } else {
    addC(name,'active');
    addC(fullData,'active');
    addC(fullData,'show');
    addC(fullData,'expand');
    removeC(fadeOut,'hide');
    addC(emailPhone,'hide');
    addC(item,'active');
  }
}

function addC(ele, cl){
  ele.classList.add(cl);
}

function removeC(ele, cl){
  ele.classList.remove(cl);
}
