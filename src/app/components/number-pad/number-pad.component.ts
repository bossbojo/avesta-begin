import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-pad',
  templateUrl: './number-pad.component.html',
  styleUrls: ['./number-pad.component.scss']
})
export class NumberPadComponent implements OnInit {
  @Input() Number = '';
  @Output() NumberChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectedPadNunber(num) {
    this.Number += '' + num;
    this.NumberChange.emit(this.Number);
  }

}
