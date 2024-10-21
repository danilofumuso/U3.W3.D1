import { Component, Input } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: iProduct;

  constructor(
    private productSvc: ProductService,
    private authSvs: AuthService
  ) {}

  addProductToCart(product: iProduct) {
    this.productSvc.addToCart(product);
  }

  addToFavs(product: iProduct) {
    this.productSvc.addToFavourites(product);
  }

  toggle() {
    this.authSvs.toggleBoolean(); //N.B.= addToFavs e toggle sono 2 metodi scatenati dallo stesso click di un bottone, sarebbe meglio fare un metodo solo!
  }
}
