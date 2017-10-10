import { Component, OnInit, Input } from '@angular/core';
import { Family, Specy, Sample, Box, Position } from '../../album/album.component';

@Component({
  selector: 'picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

    @Input() sample: Sample;
    
    zoomed: boolean = false;
    
  constructor() { }

  ngOnInit() {
  }
     
  getUrl(): string {
      return this.sample.url;
  }

     getTags(): string[] {
         let tags: string[] = [];
         tags.push(this.sample.family + " " + this.sample.specy);
         tags.push(this.sample.lot);
         return tags;
     }
    
    switchZoom(): void {
        this.zoomed = !this.zoomed;
    }
    
    getNextZoom(): string {
        if(this.zoomed){
            return "out";
        } else {
            return "in";
        }
    }
     
}
