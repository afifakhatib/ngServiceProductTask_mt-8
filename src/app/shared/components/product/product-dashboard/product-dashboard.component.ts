import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../model/prod.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

 @Input() prodArr !: Array<Iproduct> 

  constructor(
    private _prod : ProductService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
     this.prodArr = this._prod.fetchedProdData()
     this._snackbar.openSnackBar(`Fetched All Product Data successfully!!`)
  }
}
