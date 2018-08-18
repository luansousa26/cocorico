import { Component, OnInit } from '@angular/core';
import { Videos } from './videos.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: Videos[] = [];
  constructor() { }

  ngOnInit() {
  }

}
