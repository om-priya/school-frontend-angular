import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PrincipalService,
  principalData,
} from '../../services/principal.service';
import { Subscription } from 'rxjs';
import { VariableBinding } from '@angular/compiler';

@Component({
  selector: 'school-principal-details',
  templateUrl: './principal-details.component.html',
  styleUrl: './principal-details.component.css',
})
export class PrincipalDetailsComponent implements OnInit, OnDestroy {
  fetchSingleRouteSubscriber!: Subscription;
  principalData!: principalData;

  constructor(
    private route: ActivatedRoute,
    private principalService: PrincipalService
  ) {}

  ngOnInit(): void {
    const principal_id = this.route.snapshot.params['id'];
    this.fetchSingleRouteSubscriber = this.principalService
      .getSinglePrincipals(principal_id)
      .subscribe((responseData) => {
        console.log(responseData);
        this.principalData = responseData.data.json[0];
        console.log(this.principalData);
      });
  }

  ngOnDestroy(): void {
    this.fetchSingleRouteSubscriber?.unsubscribe();
  }
}
