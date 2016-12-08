import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent { 

requests: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.requests = af.database.list('/requests');
    }
  
}
