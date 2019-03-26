import { ProductDetails } from './productsDetail';

export interface CheckOutDetails {
    address1?: string;
    address2?: string;
    phoneno?: string;
    status?: string;
    totalamount?: number;
    useremailid?: string;
    username?: string;
    products?: Array<ProductDetails>;
}
