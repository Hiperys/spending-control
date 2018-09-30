import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent {
  @Input() field: FormControl;
  defaultMessage: 'Ths field is invalid';
  errorMessages = [
    {validator: 'email', message: 'This is not a valid email.'},
    {validator: 'required', message: 'This field is required'},
    {validator: 'invalidOldPassword', message: 'Old password is invalid'},
    {validator: 'minlength', message: 'This field should me minimum %n characters', dynamicProperty: 'requiredLength'},
    {validator: 'maxlength', message: 'This field should me maximum %n characters', dynamicProperty: 'requiredLength'}
  ];
  // fieldErrors = [];
  //
  // ngOnInit() {
  //   if(this.field.touched && !this.field.valid){
  //     this.errorMessages.forEach((value) => {
  //       let message = this.getErrorMessage(value.validator);
  //       if (message) {
  //         this.fieldErrors.push(message);
  //       }
  //     });
  //   }
  // }

  /**
   * Gets the error message for the selected condition
   * @param condition
   * @returns string
   */
  getErrorMessage(condition) {
    return this.parseErrorMessage(condition);
  }

  private parseErrorMessage(condition) {
    let messageObject = this.filterMessage(condition);
    if (!messageObject)
      return this.defaultMessage;

    if (!messageObject.dynamicProperty) {
      return messageObject.message;
    } else {
      return messageObject.message.replace(
        '%n',
        this.field.errors[messageObject.validator][messageObject.dynamicProperty]);
    }
  }

  private filterMessage(condition) {
    return this.errorMessages.find(o => o.validator === condition);
  }
}
