import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form-details';
  name:any
  address:any
  age:any
  email:any
  phone:any
  pincode:any

  obj={name:null ,
  address: null,
  age: null,
  email: null,
  phone: null,
  pincode: null,}

  submit() {
  
    this.obj.name=this.name
    this.obj.address=this.address
    this.obj.age=this.age
    this.obj.email=this.email
    this.obj.phone=this.phone
    this.obj.pincode=this.pincode

  }

  nameF(event:any){
    this.name=event.target.value

  }

  addressF(event:any){
    this.address=event.target.value
  }

  ageF(event:any){
    this.age=event.target.value

  }

  emailF(event:any){
    this.email=event.target.value

  }

  phoneF(event:any){
    this.phone=event.target.value

  }

  pincodeF(event:any){
    this.pincode=event.target.value

  }
}
