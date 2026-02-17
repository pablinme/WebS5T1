
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  imports: [FormsModule, ReactiveFormsModule]
})

export class ProductComponent implements OnInit {
  products: Product[] = [];
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      price: ['']
    });

    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(res => this.products = res);
  }

  onSubmit() {
    this.productService.addProduct(this.productForm.value).subscribe(() => {
      this.productForm.reset();
      this.loadProducts();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }
}
