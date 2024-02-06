import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  //Variables
  searchText: string = '';
  selectedCategory: string = '';
  // shopItems: any[] = [];
  shopItems: any[] = [
    { id: '1', image: './assets/pr_1.jpg', name: 'Item 1', description: 'Description 1', category: 'tshirt' },
    { id: '2', image: './assets/pr_2.jpg', name: 'Item 2', description: 'Description 2', category: 'tshirt' },
    { id: '3', image: './assets/pr_3.jpg', name: 'Item 3', description: 'Description 3', category: 'sweatshirt' },
    { id: '4', image: './assets/pr_4.jpg', name: 'Item 4', description: 'Description 4', category: 'sweatshirt' },
    { id: '5', image: './assets/pr_5.jpg', name: 'Item 5', description: 'Description 5', category: 'sweatshirt' },
    { id: '6', image: './assets/pr_6.jpg', name: 'Item 6', description: 'Description 6', category: 'hoody' },
    { id: '7', image: './assets/pr_7.jpg', name: 'Item 7', description: 'Description 7', category: 'hoody' },
    { id: '8', image: './assets/pr_8.jpg', name: 'Item 8', description: 'Description 8', category: 'hoody' },
  ];
  filterShopItems: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // fetch id of category for filter
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['id'];
      this.getProducts();
    });
  }

  // fetch Products from API
  getProducts() {
    this.applyFilter();
  }

  applyFilter() {
    //-- For filter by category
    if (this.selectedCategory !== "all") {
      this.shopItems.filter(f => f.category == this.selectedCategory);
    }
  }

  onBuy(data: any) {
    console.log("🚀 ~ ShopComponent ~ onBuy ~ data:", data)
  }

  onAddtoCart(data: any) {
    console.log("🚀 ~ ShopComponent ~ onAddtoCart ~ data:", data)
  }

}
