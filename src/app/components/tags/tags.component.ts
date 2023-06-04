import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input()
  productPageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (!this.productPageTags) this.tags = this.productService.getAllTags();
  }
}
