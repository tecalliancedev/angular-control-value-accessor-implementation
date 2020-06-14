import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface Spaceship {
  name: string;
  builtInYear: number;
  config: {
    maxSpeed: number;
    nbCanons: number;
  };
}

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.scss']
})
export class SpaceshipComponent implements OnInit, OnDestroy {

  public internalFormGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    builtInYear: new FormControl(),
    config: new FormControl({ maxSpeed: null, nbCanons: null}),
  });

  public ngOnInit(): void {
    const s = new FormArray([]);
  }

  public ngOnDestroy(): void {
  }

}
