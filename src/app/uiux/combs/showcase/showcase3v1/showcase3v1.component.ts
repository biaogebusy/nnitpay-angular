import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
// import { H5P } from 'h5p-standalone';
const { H5P } = require('h5p-standalone');
@Component({
  selector: 'app-showcase3v1',
  templateUrl: './showcase3v1.component.html',
  styleUrls: ['./showcase3v1.component.scss'],
})
export class Showcase3v1Component implements OnInit, AfterViewInit {
  @Input() content: any;
  @ViewChild('h5p') h5p: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.h5p);
    const el = this.h5p.nativeElement;
    const options = {
      id: 'exercise-one',
      frameJs: '/assets/plugins/h5p-standalone/dist/frame.bundle.js',
      frameCss: '/assets/plugins/h5p-standalone/dist/styles/h5p.css',
      h5pJsonPath: '/assets/h5p',
      librariesPath: '/assets/h5p/libraries', //content is on same folder level as h5p.json
      frame: true, //required to display copyright,  embed, & export buttons
      copyright: true,
      embed: true,
      export: true,
      icon: true,
      downloadUrl: '/assets/h5p/sample.h5p',
    };

    const h5p = new H5P(el, options).then(() => {
      // do stuff
    });

    console.log(h5p);
  }
}
