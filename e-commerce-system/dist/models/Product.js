"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, title, description, category, price, discountPercentage, rating, stock, tags, brand, sku, weight, dimensions, warrantyInformation, shippingInformation, availabilityStatus, reviews, returnPolicy, minimumOrderQuantity, meta, thumbnail, images) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.tags = tags;
        this.brand = brand;
        this.sku = sku;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInformation = warrantyInformation;
        this.shippingInformation = shippingInformation;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.returnPolicy = returnPolicy;
        this.minimumOrderQuantity = minimumOrderQuantity;
        this.meta = meta;
        this.thumbnail = thumbnail;
        this.images = images;
    }
    displayDetails() {
        console.log(`\n--- ${this.title} ---`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Discount: ${this.discountPercentage}%`);
        console.log(`Category: ${this.category}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Availability: ${this.availabilityStatus}`);
        console.log(`Rating: ${this.rating}`);
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage) / 100;
    }
}
exports.Product = Product;
