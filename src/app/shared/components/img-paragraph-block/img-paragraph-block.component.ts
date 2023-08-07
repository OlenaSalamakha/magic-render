import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-img-paragraph-block',
  templateUrl: './img-paragraph-block.component.html',
  styleUrls: ['./img-paragraph-block.component.scss']
})
export class ImgParagraphBlockComponent implements OnInit {

  @Input() imageSrc!: string;
  @Input() imageAlt: string = 'image';
  @Input() text: string = 'For the small and large independent dealerships';
  @Input() title!: string;
  @Input() reverseFoldingOrder: boolean = false;

  constructor(protected _router: Router,
              protected _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToPortfolio() {
    this._router.navigate(['../portfolio'], { relativeTo: this._route });
  }

}
