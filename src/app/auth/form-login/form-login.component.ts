import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  private loginService = inject(LoginService);

  onSubmit(form: NgForm) {
   this.loginService.login(form.value)
    //console.log(form.value)
  }

}
