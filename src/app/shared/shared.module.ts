import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ImgParagraphBlockComponent } from './components/img-paragraph-block/img-paragraph-block.component';
import { ImageBgBlockComponent } from './components/image-bg-block/image-bg-block.component';

export const components = [
  ImgParagraphBlockComponent,
  ImageBgBlockComponent
];

export const pipes = [];

export const directives = [];

export const modules = [
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  AngularSvgIconModule,
  ButtonModule, // PRIME NG
];

@NgModule({
  declarations: [...components, ...pipes, ...directives],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [...components, ...pipes, ...modules, ...directives],
  providers: [...pipes]
})
export class SharedModule { }
