"use strict";

// Add an attribute objects to an element
var addAttributes = function addAttributes(element, attrObj) {
  for (var attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
}; // create lements with attributes and childrens


var createCustomElement = function createCustomElement(element, attributes, children) {
  var customElement = document.createElement(element);
  if (children !== undefined) children.forEach(function (el) {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement, attributes);
  return customElement;
}; // Modal


var printModal = function printModal(content) {
  // Creating inner container
  var modalContentElement = createCustomElement('div', {
    id: 'modal-content',
    "class": 'modal-content'
  }, [content]),
      // Creating main container
  modalContainerElement = createCustomElement('div', {
    id: 'modal-container',
    "class": 'modal-container'
  }, [modalContentElement]); // Printing the modal

  document.body.appendChild(modalContainerElement); // Quitting Modal

  var closeModal = function closeModal() {
    return document.body.removeChild(modalContainerElement);
  };

  modalContainerElement.addEventListener('click', function (e) {
    if (e.target === modalContainerElement) closeModal();
  });
};

document.getElementById('show-modal').addEventListener('click', function () {
  printModal("<p class='modaAlert'>Lamentablemente la tienda y la aplicaci\xF3n educativa \"BoroBoro\" no se encuentran disponibles por el momento. <br><br> <i class='disable-text'>Toque cualquier parte de la pantalla para salir</i></p>");
});