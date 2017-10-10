import { Component, OnInit, Input } from '@angular/core';
import { Family, Specy, Sample, Box, Position } from '../album/album.component';

@Component({
  selector: 'album-pictures',
  templateUrl: './album-pictures.component.html',
  styleUrls: ['./album-pictures.component.css']
})
export class AlbumPicturesComponent implements OnInit {
    
    @Input() families: Family[];

  constructor() { }

  ngOnInit() {
  }
     
     shownSamples(): Sample[] {
         let samples: Sample[] = [];
         for(let i: number = 0; i < this.families.length; i++){
             if(this.families[i].isShown){
                 for(let j: number = 0; j < this.families[i].species.length; j++){
                     if(this.families[i].species[j].isShown){
                         for(let k: number = 0; k < this.families[i].species[j].samples.length; k++){
                            this.families[i].species[j].samples[k].family = this.families[i].familyName;
                            this.families[i].species[j].samples[k].specy = this.families[i].species[j].name;
                            samples.push(this.families[i].species[j].samples[k]);
                         }
                     }
                 }
             }
         }
         
         return samples;
     }
     
     getNbShownSamples(): string {
         let samples: Sample[] = this.shownSamples();
         if(samples.length === 0) {
             return "Aucune image ne correspond aux filtres sélectionnés.";
         } else if(samples.length === 1) {
             return "Il y a 1 image qui correspond aux filtres sélectionnés.";
         } else {
             return "Il y a " + samples.length + " images qui correspondent aux filtres sélectionnés.";
         }
     }

}
