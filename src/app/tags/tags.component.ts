import { Component, OnInit, ViewChild, Renderer2, ViewContainerRef } from '@angular/core';
import { TagsDescription } from './tags';
import { TagsService } from './tags.service';
import { ProductDetails } from '../domainmodel/productsDetail';
import { urlConst } from '../const';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tagsDescription = {} as TagsDescription;
  tags: Array<ProductDetails> = [];
  public categoryName = 'Tags For Your Pets';
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
  @ViewChild('tagDetail') private tagDetail: any;
  img: string;
  constructor(
    private renderer: Renderer2,
    private tagsService: TagsService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.getAllProduct();
    // this.tags = [];
  }

  getAllProduct() {
    this.tagsService.getAllProduct().subscribe((products: Array<ProductDetails>) => {
      console.log('products', products);
      this.tags = products;
      this.categoryName = 'Tags For Your Pets';
      this.img = `${urlConst.baseUrl}/products`;
    });
  }

  getProductCategoryWise(category) {
    this.tagsService.getProductCategoryWise(category).subscribe(productCategory => {
      console.log('category', productCategory);
      this.tags = productCategory['msg'];

    });
  }

  selectedTag(tags) {
    console.log('tags', tags);
    this.tagsDescription = tags;
    console.log('this.tagsDescription', this.tagsDescription);
    this.openTagDetail();
  }

  selectedCategory(category) {
    console.log('category', category);
    this.categoryName = category;
    this.getProductCategoryWise(this.categoryName);
  }

  openTagDetail() {
    const dialogref = this.renderer.selectRootElement(this.tagDetail);
    dialogref.show();
  }
  closeTagDetail(event) {
    const dialogref = this.renderer.selectRootElement(this.tagDetail);
    if (event) {
      dialogref.hide();
    }
  }
}
