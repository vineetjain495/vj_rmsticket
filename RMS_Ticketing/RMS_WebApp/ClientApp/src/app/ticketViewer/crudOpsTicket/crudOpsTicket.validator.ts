import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";


export class CrudeOpsTicketValidator {
  
  static cannotBeZero(controller: AbstractControl): ValidationErrors | null {
    
    if (controller.value != null) {
      
      if ((controller.value as string).indexOf('0') == 0) {
        if (controller.value == 0) {
          return { cannotStartAsZero: true  ,cannotBeZero: true};
        }
        return { cannotStartAsZero: true, cannotBeZero: false };
      }
      
      }
    return null;
  }

  //static transactionAmountvalidation(transactionAmount:string, disputeAmount:string){
  //  return (formGroup: FormGroup) => {
  //    
  //    const tranxAmount = formGroup.controls[transactionAmount];
  //    const dispAmount = formGroup.controls[disputeAmount];
  //    if (tranxAmount.value != null) {
  //      

  //      if (tranxAmount.errors && !tranxAmount.errors.transactionAmountValidation) {
  //        // return if another validator has already found an error on the matchingControl
  //        return;
  //      }

  //      if (Number(tranxAmount.value) > Number(dispAmount.value)) {
  //        return tranxAmount.setErrors({ transactionAmountValidation: true });
  //      } else {
  //        return tranxAmount.setErrors(null);
  //      } 
  //      }

  //    return tranxAmount.setErrors(null);  
  //    }

      


      
        
  //}

  static CardNo(controller: AbstractControl): ValidationErrors | null {
    
    if (controller.value != null) {
    
      if (((controller.value as string).length) == 18 || ((controller.value as string).length) == 17) {
        return { CardNo: true };
      }
    }
    return null;
  }
}


    
