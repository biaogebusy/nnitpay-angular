import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/uiux/base/base.widget';

@Component({
  selector: 'app-showcase3v8',
  templateUrl: './showcase3v8.component.html',
  styleUrls: ['./showcase3v8.component.scss'],
})
export class Showcase3v8Component extends BaseComponent implements OnInit {
  @Input() content: any;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
