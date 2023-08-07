import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const components = [
  MainComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [...components, ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MainModule { }
