import { Component, OnInit, Input } from '@angular/core';
import { Family, Specy, Sample, Box, Position } from '../album/album.component';

@Component({
  selector: 'album-filter',
  templateUrl: './album-filter.component.html',
  styleUrls: ['./album-filter.component.css']
})
export class AlbumFilterComponent implements OnInit {

    @Input() families: Family[];

  constructor() { }

  ngOnInit() {
  }
    
    userExpand(family: Family): void {
        if(family.species.length > 0){
            family.isShown = !family.isShown;
        }
    }
    
    userSwitchSpecy(specy: Specy): void {
        if(specy.samples.length > 0){
            specy.isShown = !specy.isShown;
        }
    }
    
    showingSpecies(family: Family): boolean {
        return (family.species.length > 0 && family.isShown);
    }
    
    familyHasSpecies(family: Family): boolean {
        return (family.species.length > 0);
    }
     
    specyHasSamples(specy: Specy): boolean {
        return (specy.samples.length > 0);
    }
}
