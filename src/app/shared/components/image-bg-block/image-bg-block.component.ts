import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-bg-block',
  templateUrl: './image-bg-block.component.html',
  styleUrls: ['./image-bg-block.component.scss']
})
export class ImageBgBlockComponent implements OnInit {
  @Input() imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
