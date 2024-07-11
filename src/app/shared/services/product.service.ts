import { Injectable } from '@angular/core';
import { UuidService } from './uuid.service';
import { Iproduct, ProductStatus } from '../components/product/model/prod.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData : Array<Iproduct> = [
    {
      pname : 'Samsung Galaxy s23',
      pdetails : 'memory 128gb mobile 5gb',
      pstatus : ProductStatus.InProgress,
      pId : this._uuid.Uuid()
    },
    {
      pname : 'Iphone',
      pdetails : 'memory 128gb mobile 5gb',
      pstatus : ProductStatus.Dispatched,
      pId : this._uuid.Uuid()
    },
    {
      pname : 'Samsung Galaxy s24 pro',
      pdetails : 'memory 128gb mobile 5gb z-flip',
      pstatus : ProductStatus.Delivered,
      pId : this._uuid.Uuid()
    }
  ]

  constructor(
    private _uuid : UuidService,
    private _snackbar : SnackbarService,
  ) { }

  fetchedProdData(){
    // api call
    return this.productData
  }

  createProdData(newProd : Iproduct){
    //  api call
    this.productData.push(newProd)
    this._snackbar.openSnackBar(`New Product ${newProd.pname} addedd successfully!!`)
  }

  updateProdstatus(updateProd : Iproduct){
       let getIndex = this.productData.findIndex(stat => stat.pId === updateProd.pId)
       this.productData[getIndex] = updateProd
       this._snackbar.openSnackBar(`Product Status is Updated to ${updateProd.pstatus} successfully!!`)
  }
}
