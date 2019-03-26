import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product-add-edit-modal',
  templateUrl: './product-add-edit-modal.component.html',
  styleUrls: ['./product-add-edit-modal.component.scss']
})
export class ProductAddEditModalComponent implements OnInit, OnChanges {
  public productForm: FormGroup;
  public event: any;
  public reader: FileReader;
  public url: any;
  public newFile: any;
  @Input() title: string;
  @Output() closeProductModal: EventEmitter<any> = new EventEmitter<any> ();
  @Output() isProductAdded: EventEmitter<boolean> = new EventEmitter<boolean> ();
  public categories = [
    'Cleaning & Potty',
    'Crates, Cages & Beds',
    'DogTag',
    'Biscuits And Treats',
    'Grooming',
    'Training',
    'Clothing & Accessories',
    'Health & Wellness',
    'Bowls & Feeders',
    'Collars & Leashes',
    'Toys',
    'Flea & Ticks',
    'Dog Food',
    'Pet Store',
    'Pet Lovers Gallery',
  ];
  currentCategory: any;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  ngOnChanges() {
  console.log('title', this.title);
  }

  createForm() {
    this.productForm = this.fb.group({
      prodSize: ['', Validators.required],
      prodPrice: ['', Validators.required],
      prodInfo: ['', Validators.required],
      prodCategory: ['', Validators.required],
      // productCount: ['', Validators.required],
      productImage: ['', Validators.required],
    });
  }

  readUrl(event: any) {
    this.event = event;
    console.log('this.event', this.event);
    console.log('Okay', event.target.files);
    this.newFile = event.target.files[0];
    console.log('this.newFile', this.newFile);
    console.log('Okay1111', this.newFile.size);
    if (event.target.files && event.target.files[0]) {
      this.reader = new FileReader();

      // tslint:disable-next-line:no-shadowed-variable
      this.reader.onload = (event: any) => {

        this.url = event.target.result;
        console.log('this.url', this.url);
        // localStorage.setItem('url', this.url);
      };
      this.reader.readAsDataURL(event.target.files[0]);
    }
  }

  closeModal() {
    this.closeProductModal.emit(true);
  }

  saveProducts(price, size, info) {
    console.log('price', price);
    console.log('size', size);
    // price = this.productForm.value.prodPrice;
    // size = this.productForm.value.prodSize;
    this.adminService.addProducts(this.newFile, price, size, info, this.currentCategory).subscribe(res => {
    console.log('res', res);
    if (res) {
      this.isProductAdded.emit(true);
      this.closeModal();
    }
    });
  }

  selectedCategory(category) {
    console.log('category', category['value']);
    this.currentCategory = category['value'];
  }

}
