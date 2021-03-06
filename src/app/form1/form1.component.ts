import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ValidationService } from "../core/components/validation-messages/validation-messages.service";
@Component({
  selector: "app-form1",
  templateUrl: "./form1.component.html",
  styleUrls: ["./form1.component.css"],
})
export class Form1Component implements OnInit {
  userForm: FormGroup;
  myText: string;
  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {}

  createForm() {
    this.userForm = this.formBuilder.group({
      Name: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(35),
          ],
          updateOn: "blur",
        },
      ],
      Email: [
        "",
        {
          validators: [
            Validators.required,
            this.validationService.emailValidator,
          ],
          updateOn: "blur",
        },
      ],
      Mobile: [
        "",
        {
          validators: [
            Validators.required,
            this.validationService.mobileValidator,
          ],
          updateOn: "blur",
        },
      ],
    });
  }

  reset() {
    this.createForm();
  }
  ngOnInit() {
    this.createForm();
  }

  saveUser(userForm: any) {
    // Added check form valid, if any user inspecting html and enabling submit Button
    if (userForm.valid) {
      console.log(userForm.value);
    }
  }
}
