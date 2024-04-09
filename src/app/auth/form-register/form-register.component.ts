import {Component, inject} from '@angular/core';
import {LoginService} from "../../login.service";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {


  private loginService = inject(LoginService);


  onSubmit(form: NgForm) {
    this.loginService.register(form.value)
  }


}
