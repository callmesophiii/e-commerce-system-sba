"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const apiService_1 = require("./services/apiService");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const errorHandler_1 = require("./utils/errorHandler");
function runApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, apiService_1.fetchProducts)();
            const products = data.map((p) => new Product_1.Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage, p.rating, p.stock, p.tags, p.brand, p.sku, p.weight, p.dimensions, p.warrantyInformation, p.shippingInformation, p.availabilityStatus, p.reviews, p.returnPolicy, p.minimumOrderQuantity, p.meta, p.thumbnail, p.images));
            for (const product of products) {
                product.displayDetails();
                const discounted = product.getPriceWithDiscount();
                const tax = (0, taxCalculator_1.calculateTax)(discounted, product.category);
                console.log(`Discounted Price: $${discounted.toFixed(2)}`);
                console.log(`Tax: $${tax.toFixed(2)}`);
                console.log(`Final Price: $${(discounted + tax).toFixed(2)}\n`);
                console.log("Reviews:");
                product.reviews.forEach(r => console.log(` - ${r.reviewerName} (${r.rating}/5): ${r.comment}`));
            }
        }
        catch (error) {
            (0, errorHandler_1.handleError)(error);
        }
        const price = 100;
        const discount = 10;
        const discountAmount = (0, discountCalculator_1.calculateDiscount)(price, discount);
        console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
    });
}
runApp();
