import { Component, AfterViewInit } from '@angular/core';
// import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Register Swiper modules
// Swiper.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 2000,
      },
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}
