import { Component, OnDestroy, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-spaceship-config',
  templateUrl: './spaceship-config.component.html',
  styleUrls: ['./spaceship-config.component.scss']
})
export class SpaceshipConfigComponent implements OnInit, OnDestroy, ControlValueAccessor {
  private onChange: (value: any) => void;
  private onTouched: () => void;
  private onDestroy$: Subject<void> = new Subject();

  public configFormGroup: FormGroup = new FormGroup({
    maxSpeed: new FormControl(null, [Validators.required]),
    nbCanons: new FormControl(null, [Validators.required]),
  });

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  public ngOnInit(): void {

    const control = this.controlDir.control;
    control.setValidators([this.validate.bind(this)]);
    control.updateValueAndValidity();
    //
    // this.controlDirective.control.setValidators([this.validate.bind(this)]);
    // this.controlDirective.control.updateValueAndValidity();
    this.configFormGroup.valueChanges
      .pipe(
        tap(value => {
          this.onChange(value);
          this.onTouched();
        }),
        takeUntil(this.onDestroy$),
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  validate(obj: any) {
    const isNotValid = !this.configFormGroup.valid;
    console.log(isNotValid);
    return isNotValid && {
      required: true
    };
  }


  writeValue(obj: any): void {
    // every time the form control is
    // being updated from the parent
    console.log(obj);
    console.log(this.configFormGroup);
    this.configFormGroup.setValue(obj, { emitEvent: false });

    this.configFormGroup.markAsPristine();
    this.configFormGroup.markAsUntouched();
  }

  registerOnChange(fn: any): void {
    // when we want to let the parent
    // know that the value of the
    // form control should be updated

    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // when we want to let the parent
    // know that the form control
    // has been touched

    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // when the parent updates the
    // state of the form control

    if (isDisabled) {
      this.configFormGroup.disable();
    } else {
      this.configFormGroup.enable();
    }
  }
}
