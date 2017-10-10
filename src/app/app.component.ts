import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    activeRoute: string = "/";
    currentTabId: string = "overview";
    fadeblockShown: boolean = false;
    
    constructor(private router: Router) { }
    
    ngOnInit() {
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.activeRoute = event.url;
                if(this.activeRoute !== ""){
                    this.currentTabId = "features";
                }
            });
    }

    isActiveRoute(route: string): boolean {
        return (this.activeRoute === route);
    }
    
    showFadeblock(): void {
        this.fadeblockShown = true;
    }
    
    hideFadeblock(): void {
        this.fadeblockShown = false;
    }
}
