

export interface Iproduct  {
    pname: string;
    pdetails: string;
    pstatus: ProductStatus;
    pId: string;

}  

export enum ProductStatus{
    InProgress = 'In Progress',
    Dispatched = 'Dispatched',
    Delivered = 'Delivered'
}