import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() public addressData!: AddressData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('address');
  }

}
