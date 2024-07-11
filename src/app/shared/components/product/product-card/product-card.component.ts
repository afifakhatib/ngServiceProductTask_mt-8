import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductStatus } from '../model/prod.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() getProd !: Iproduct;
  
  productStatusEnum = ProductStatus

  constructor(
    private _prod : ProductService
  ) { }

  ngOnInit(): void {
  }

  onProdStatusChange(status : ProductStatus){
    this.getProd.pstatus = status
    this._prod.updateProdstatus(this.getProd)
  }
}
