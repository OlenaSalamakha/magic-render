import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioComponent } from './portfolio.component';

export const components = [
  PortfolioComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PortfolioModule { }
