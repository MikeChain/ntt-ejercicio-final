import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;

  @Output() sender = new EventEmitter<string>();

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null, [Validators.required, Validators.maxLength(40)]],
    });
  }

  ngOnInit(): void {}

  onSend(event: Event): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
    this.sender.emit("El usuario hizo click en enviar");
  }

  get name(): FormControl {
    return <FormControl>this.form.get("name");
  }

  get email(): FormControl {
    return <FormControl>this.form.get("email");
  }
  get phone(): FormControl {
    return <FormControl>this.form.get("phone");
  }
  get message(): FormControl {
    return <FormControl>this.form.get("message");
  }
}
