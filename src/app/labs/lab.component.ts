import { Component, OnInit } from '@angular/core';
import { LabBean } from './LabBean'

import { LabService } from './lab.service';

@Component({
    selector: 'list-lab',
    templateUrl: 'app/labs/lab.component.html',
    styles : ['app/style.css'],
     
    providers: [LabService]
   
})

export class LabComponent implements OnInit {
    labs: LabBean[];
    statusMessage : string = 'Loading Data Please Wait';

   
    constructor(private _labService: LabService) {
    }

   
    ngOnInit() {
       this._labService.getLabs().subscribe(LabsData => this.labs = LabsData,(error)=> { this.statusMessage=error});
        
    }

}