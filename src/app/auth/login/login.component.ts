import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }



  connect()
{
  this.router.navigateByUrl('/home')

/*   let Email="radhwanrouihm"
  let password="usausa"

  if((this.email==Email)&&(this.password==password))
  {
    this.router.navigateByUrl('/home')

  }
  else
  {
    Swal.fire({
      title: 'Error!',
      text: 'Verifier vos informations',
      icon: 'error',
      confirmButtonText: 'ok'
    })  }
   } */
  }
}
