import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from "@angular/forms";

@Component({
  selector: 'app-city-autocomplete-form',
  templateUrl: './city-autocomplete-form.component.html',
  styleUrls: ['./city-autocomplete-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CityAutocompleteFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CityAutocompleteFormComponent),
      multi: true,
    }
  ]
})
export class CityAutocompleteFormComponent implements OnInit, ControlValueAccessor, Validator {
  private parseError=true;
  public city_name: string;
  @Output() private city_name_changed = new EventEmitter();
  @Input('options') options: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }
  public enteringCity() {
    console.log('input');
    const length = this.city_name.split('').length;
    this.parseError = length<=2;
    this.city_name_changed.emit({city_name: this.city_name, valid: !this.parseError});
    this.propagateChange(this.city_name);
  }

  private propagateChange = (_: any) => {console.log('changed')};

  public writeValue(name: string) {
    if (name) {
      this.city_name = name;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  public registerOnTouched() { }

  public validate(c: FormControl) {
    return (!this.parseError) ? null : {
      jsonParseError: {
        valid: false,
      }
    }
  }

}
