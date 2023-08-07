import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationRoutes } from 'src/app/shared/enums/navigation-routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  NavigationRoutes = NavigationRoutes;

  constructor(protected _router: Router,
              protected _route: ActivatedRoute,
              @Inject(DOCUMENT) readonly document: Document,) { }

  ngOnInit(): void {
  }

  scrollToAboutUsSection() {
    const block = document.getElementById('about-us');
    const rect = block?.getBoundingClientRect();

   scrollTo({
      top: rect?.y && (rect?.y - 125),
      behavior: "smooth",
    });
  }

  navigateToAboutUs() {
    this.navigateToHome();

    setTimeout(() => this.scrollToAboutUsSection(), 300)
  }

  navigateToHome() {
    this._router.navigate(['../'], { relativeTo: this._route });
  }

}
