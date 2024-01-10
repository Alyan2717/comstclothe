import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//||==========================|| Product Slider ||==========================||
  slides = [
    { img: './assets/pr_1.jpg', name: 'Test1' },
    { img: './assets/pr_2.jpg', name: 'Test2' },
    { img: './assets/pr_3.jpg', name: 'Test3' },
    { img: './assets/pr_4.jpg', name: 'Test4' },
    { img: './assets/pr_5.jpg', name: 'Test5' },
    { img: './assets/pr_6.jpg', name: 'Test6' },
    { img: './assets/pr_7.jpg', name: 'Test7' },
    { img: './assets/pr_8.jpg', name: 'Test8' }
  ]
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    draggable: false,
    mobileFirst: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    infinite: true, // Set infinite to true for autoplay
    autoplay: false, // Enable autoplay
    speed: 1000, // Transition speed in milliseconds
    autoplaySpeed: 2000 // Autoplay interval in milliseconds
  };
}
