import {
    ReactiveFormsModule,
    NG_VALIDATORS,
    FormsModule,
    FormGroup,
    FormControl,
    ValidatorFn,
    Validator
} from '@angular/forms';
import { Directive, Input, forwardRef } from '@angular/core';
import * as _ from 'lodash';
@Directive({
    selector: '[duplicateRegionValidator][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DuplicateRegionValidator),
            multi: true
        }
    ]
})
export class DuplicateRegionValidator implements Validator {
    @Input('duplicateRegionValidator') model: any;
    validator: ValidatorFn;
    constructor() {
        this.validator = this.duplicateRegionValidator();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }

    duplicateRegionValidator(): ValidatorFn {
        return (c: FormControl) => {
            let isValid = false;
            if (c.value) {
                var data = _.filter(this.model, { 'AreaOfficeCode': c.value });
                if (data.length > 1) {
                    isValid = false;
                }
                else {
                    isValid = true;
                }
            }

            if (isValid) {
                return null;
            } else {
                return {
                    duplicateRegionValidator: {
                        valid: false
                    }
                };
            }
        }
    }
}