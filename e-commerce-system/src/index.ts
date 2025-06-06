import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

async function runApp() {
  try {
    const data = await fetchProducts();

    const products = data.map((p: any) =>
      new Product(
        p.id, p.title, p.description, p.category, p.price, p.discountPercentage,
        p.rating, p.stock, p.tags, p.brand, p.sku, p.weight, p.dimensions,
        p.warrantyInformation, p.shippingInformation, p.availabilityStatus,
        p.reviews, p.returnPolicy, p.minimumOrderQuantity, p.meta,
        p.thumbnail, p.images
      )
    );

    for (const product of products) {
      product.displayDetails();
      const discounted = product.getPriceWithDiscount();
      const tax = calculateTax(discounted, product.category);
      console.log(`Discounted Price: $${discounted.toFixed(2)}`);
      console.log(`Tax: $${tax.toFixed(2)}`);
      console.log(`Final Price: $${(discounted + tax).toFixed(2)}\n`);
      console.log("Reviews:");
      product.reviews.forEach(r =>
        console.log(` - ${r.reviewerName} (${r.rating}/5): ${r.comment}`)
      );
    }

  } catch (error) {
    handleError(error);
  }

  const price = 100;
  const discount = 10;

const discountAmount = calculateDiscount(price, discount);
console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
}

runApp();