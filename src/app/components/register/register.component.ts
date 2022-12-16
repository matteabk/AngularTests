import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() public formDataOutput: EventEmitter<FormGroup> = new EventEmitter();

  public registerForm !: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  private createForm (): void {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      cpf: new FormControl(),
      birthday: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        complement: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
        district: new FormControl(),
        zipCode: new FormControl(),
      }),
      contact: new FormGroup({
        phone: new FormControl(),
        email:new FormControl(),
      }),
      username: new FormControl(),
      password: new FormControl()
    })
  }

  public onSubmit(): void {
    // this.formDataOutput.emit(this.registerForm);
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
