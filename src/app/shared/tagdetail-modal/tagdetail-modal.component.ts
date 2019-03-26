import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TagsService } from '../../tags/tags.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ProductDetails } from '../../domainmodel/productsDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tagdetail-modal',
  templateUrl: './tagdetail-modal.component.html',
  styleUrls: ['./tagdetail-modal.component.scss']
})
export class TagdetailModalComponent implements OnInit, OnChanges {
  selectesItems = [];
  itemArr: any;
  nameInitial: string;
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any> ();
  backInfo = new FormControl('', Validators.required);
  backName = new FormControl('', Validators.required);
  frontDesign = new FormControl('', Validators.required);
  frontName = new FormControl('', Validators.required);
  addInfo = new FormControl('', Validators.required);
  @Input() tagsDescription: any;
  constructor(
    private tagsService: TagsService,
    private localstorageService: LocalStorageService,
    private router: Router

  ) { }

  ngOnInit() {

    this.selectesItems = this.localstorageService.get('cartItem');
    if (this.selectesItems === null) {
      this.selectesItems = [];
    }
    // console.log('this.itemArr', this.itemArr);
    // if (this.itemArr !== null) {
    //   this.itemArr.forEach(element => {
    //     console.log('element', element);
    //     this.selectesItems.push(element);
    //   });
    // }
    // console.log('this.selectesItems', this.selectesItems);
  }

  ngOnChanges() {
    console.log('this.tagsDescription_Onchanges', this.tagsDescription);
      if (this.tagsDescription['filename']) {
        this.nameInitial = this.tagsDescription['filename'].slice(0, 2);
        console.log('this.nameInitial', this.nameInitial);
      }
  }

  selectedTag() {
    console.log('this.tagsDescription', this.tagsDescription);
    const product = {} as ProductDetails;
    // this.tagsService.addToCart(this.tagsDescription).subscribe(tagDetail => {
      // console.log('tagDetail', tagDetail);
      if (this.tagsDescription) {
        // product = this.tagsDescription as ProductDetails;
        product.name = this.tagsDescription['filename'];
        product.price = this.tagsDescription['prod_price'];
        product.size = this.tagsDescription['size'];
        product.filefullpath = this.tagsDescription['filefullpath'];
        product.prod_backinfo = this.backInfo.value;
        product.prod_backnm = this.backName.value;
        product.prod_frontdesign = this.frontDesign.value;
        product.prod_frontnm = this.frontName.value;
        product.additional_info = this.addInfo.value;
        product.quantity = 1;
        console.log('product', product);
        this.selectesItems.push(product);
        console.log('this.selectesItems', this.selectesItems);
        this.localstorageService.set('cartItem', this.selectesItems);
        this.closeModal.emit(true);
        this.router.navigate(['/cart']);
      }
    // });
  }

  hideModal() {
    this.closeModal.emit(true);
  }

}
