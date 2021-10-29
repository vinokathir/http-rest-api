import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpclient';
  userForm: FormGroup;
  array: any;
  map: any;
  ngOnInit() {
    this.getAll()
  }
  constructor(private http: HttpClient) {
    this.userForm = new FormGroup({
      'userid': new FormControl(),
      'title': new FormControl(),
      'body': new FormControl()
    });

  }
  getAll() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.array = res;
      });
  }
  addItem() {
    console.log(this.userForm.getRawValue())
    const add = {
      userId: this.userForm.getRawValue().userid,
      title: this.userForm.getRawValue().title,
      body: this.userForm.getRawValue().body,

    };
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', add)
      .subscribe((res: any) => {
        console.log('res', res)

      })
  }
  delete(element: any) {
    this.array.forEach((value: any, index: any) => {
      if (value == element)
        this.array.splice(index, 1);
    });
  }
  click() {
    console.log(this.userForm)
  }
  update() {
    console.log(this.userForm.getRawValue())
    const add = {
      userId: this.userForm.getRawValue().userid,
      title: this.userForm.getRawValue().title,
      body: this.userForm.getRawValue().body,

    };
    this.http
      .put('https://jsonplaceholder.typicode.com/posts', add)
      .subscribe((res: any) => {
        console.log('res', res)

      })
  }

}
