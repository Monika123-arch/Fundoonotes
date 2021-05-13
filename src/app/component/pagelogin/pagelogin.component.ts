import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/userservice/user.service';

@Component({
  selector: 'app-pagelogin',
  templateUrl: './pagelogin.component.html',
  styleUrls: ['./pagelogin.component.scss']
})
export class PageloginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private userservice: UserService) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      let arr = [] as any;

      let reqObj = {
        email : this.form.value.email,
        password : this.form.value.password
        
      }

      console.log(reqObj);

      this.userservice.loginService(reqObj).subscribe((res) => {
        console.log(res);
        arr = res;
        console.log(arr.id);
        localStorage.setItem('id',arr.id);
      },(error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
