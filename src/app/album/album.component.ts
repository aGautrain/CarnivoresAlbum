import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

    families: Family[] = [
        {
            familyName: 'Drosera',
            species: [
                {
                    name: 'capensis',
                    samples: [{
                        lot: "Alpha",
                        url: "/assets/photos/DROSERA-alpha1_26_09_17.jpg",
                        createdAt: "26/09/2017"
                    },
                    {
                        lot: "Alpha",
                        url: "/assets/photos/DROSERA-alpha2_26_09_17.jpg",
                        createdAt: "26/09/2017"
                    },
                    {
                        lot: "Beta",
                        url: "/assets/photos/DROSERA-beta1_26_09_17.jpg",
                        createdAt: "26/09/2017"
                    },
                    {
                        lot: "Beta",
                        url: "/assets/photos/DROSERA-beta2_26_09_17.jpg",
                        createdAt: "26/09/2017"
                    }],
                    isShown: true
                },
                {
                    name: 'rotundifolia',
                    samples: [],
                    isShown: false
                }
            ],
            isShown: true
        },
        {
            familyName: 'Nepenthes',
            species: [
                {
                    name: '/ to define',
                    samples: [
                        {
                            lot: "Alpha",
                            url: "/assets/photos/NEPENTHES-alpha2_26_09_17.jpg",
                            createdAt: "26/09/2017"
                        }
                    ],
                    isShown: true
                }
            ],
            isShown: true
        },
        {
            familyName: 'Dionaea',
            species: [],
            isShown: true
        },
        {
            familyName: 'Sarracenia',
            species: [],
            isShown: true
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}

export interface Family {
    familyName: string;
    species: Specy[];
    isShown: boolean;
}

export interface Specy {
    name: string;
    samples: Sample[];
    isShown: boolean;
}

export interface Sample {
    lot: string;
    url: string;
    zoom?: Box;
    createdAt?: Date | string;
    family?: string;
    specy?: string;
}

export interface Box {
    topLeftCorner: Position;
    bottomRightCorner: Position;
}

export interface Position {
    x: number;
    y: number;
}