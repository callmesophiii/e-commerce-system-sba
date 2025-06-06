export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public tags: string[],
    public brand: string,
    public sku: string,
    public weight: number,
    public dimensions: Dimensions,
    public warrantyInformation: string,
    public shippingInformation: string,
    public availabilityStatus: string,
    public reviews: Review[],
    public returnPolicy: string,
    public minimumOrderQuantity: number,
    public meta: Meta,
    public thumbnail: string,
    public images: string[]
  ) {}

  displayDetails(): void {
    console.log(`\n--- ${this.title} ---`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Category: ${this.category}`);
    console.log(`Brand: ${this.brand}`);
    console.log(`Availability: ${this.availabilityStatus}`);
    console.log(`Rating: ${this.rating}`);
  }

  getPriceWithDiscount(): number {
    return this.price - (this.price * this.discountPercentage) / 100;
  }
}