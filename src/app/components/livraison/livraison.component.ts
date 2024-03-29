import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
BasketService, BasketProduct
} from 'src/app/services/basket/basket.service';


@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css'],
  
})
export class LivraisonComponent {
  formLivraison!: FormGroup;
  validationCoordonneesError: string[] = [];
  // formLivraison!: any;
  // validationPaymentError: string[] = [];
  basket: BasketProduct[] = [];


  constructor(private formBuilder: FormBuilder, private router: Router, public basketService: BasketService ) {};
  ngOnInit(){

    this.getBasket();
    this.formLivraison = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      cp: [null, [Validators.required]],
      ville: [null, [Validators.required]],
    });
  }
  getBasket() {
    this.basket = this.basketService.getBasket();
  }

  register() {
    this.validationCoordonneesError = [];
    if (this.formLivraison.invalid) {
      Object.keys(this.formLivraison.controls).forEach((input) => {
        const currentInput = this.formLivraison.get(input);
        console.log("currentInput", currentInput);
        if (currentInput && currentInput.status === "INVALID") {
          this.validationCoordonneesError.push(input);
        }
      });
      console.log(this.validationCoordonneesError);

    }
    // modale page succès 
    // else {
    //   this.router.navigate(['/paiementSucces']);
    // }
  }

}



//  Fonction pour valider le paiement

//    pay(){
//     this.validationPaymentError = [];
//     if (this.paymentForm.invalid) {
//       Object.keys(this.paymentForm.controls).forEach((input) => {
//         const currentInput = this.paymentForm.get(input);
//         console.log("currentInput", currentInput);
//         if (currentInput && currentInput.status === "INVALID") {
//           this.validationPaymentError.push(input);
//         }
//       });
//     }
//   }
// function pay() {
//   throw new Error('Function not implemented.');
// }

