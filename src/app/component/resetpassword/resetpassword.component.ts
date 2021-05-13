import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/userservice/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,private userservice: UserService,private route: ActivatedRoute) {
    // create our form group with all the inputs we will be using in the template
    this.form = this.formBuilder.group({
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
     
      let token = this.route.snapshot.paramMap.get('token');
      
      let reqObj = {
   
        newPassword : this.form.value.password
        
      }

      console.log(reqObj);

      this.userservice.resetService(reqObj,token).subscribe((res) => {
        console.log(res);
      },(error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
