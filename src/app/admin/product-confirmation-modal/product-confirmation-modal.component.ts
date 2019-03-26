import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product-confirmation-modal',
  templateUrl: './product-confirmation-modal.component.html',
  styleUrls: ['./product-confirmation-modal.component.scss']
})
export class ProductConfirmationModalComponent implements OnInit, OnChanges {
  @Input() fileName;
  @Output() closeConfirmationModal: EventEmitter<any> = new EventEmitter<any> ();

  constructor(
    private adminService: AdminService,
  ) { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('fileName', this.fileName);
  }

  deleteProduct() {
    console.log('this.fileName', this.fileName);
    this.adminService.deleteProducts(this.fileName).subscribe(deleteRes => {
      console.log('deleteRes', deleteRes);
      // tslint:disable-next-line:triple-equals
      if (deleteRes) {
        // deleteRes === 'Successfully deleted'
        console.log('Inside');
        this.closeConfirmationModal.emit('deleted successfully');
      }
    });
  }

  closeModal() {
    this.closeConfirmationModal.emit(true);
  }

}
