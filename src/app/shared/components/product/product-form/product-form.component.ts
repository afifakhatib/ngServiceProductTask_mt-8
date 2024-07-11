import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


@ViewChild('prodForm') prodForm !: NgForm
  constructor(
    private _uuid : UuidService,
    private _prod : ProductService
  ) { }

  ngOnInit(): void {
  }

  

  onAddProd(){
    if(this.prodForm.valid){
      // console.log(this.prodForm.value)
       let newProd = {...this.prodForm.value , pId : this._uuid.Uuid()}
       this._prod.createProdData(newProd)
       this.prodForm.resetForm()
    }
  }

}
