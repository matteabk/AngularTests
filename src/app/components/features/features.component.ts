import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureData } from 'src/app/models/feature-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() public features!: FeatureData[];
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('feature');
  }

}
