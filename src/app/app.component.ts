import { Component } from '@angular/core';
import { StoreService } from './services/store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  product: string;
  price = '';
  a: number;
  form: FormGroup;
  constructor(private servicePro: StoreService, private builder: FormBuilder) {
    this.setForm();
    setTimeout(() => {
      this.a = 5000;
    }, 5000);
  }
  onClick(e) {
    console.log(e);
  }
  setForm() {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onKeyPress(e) {
    console.log(e);
  }
  onSubmit() {
    console.log('ss');

  }
}
