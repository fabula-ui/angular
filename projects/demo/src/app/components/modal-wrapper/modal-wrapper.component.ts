import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.css']
})
export class ModalWrapperComponent implements OnInit {
  modalIsOpen = false;
  
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.modalIsOpen = false;
  }

  openModal() {
    this.modalIsOpen = true;
  }

}
