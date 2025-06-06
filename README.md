# Reflection on TypeScript & Advanced JavaScript SBA

In this project, I applied TypeScript’s static typing and object-oriented programming (OOP) principles to build a structured application for product and discount management.

TypeScript’s strong typing for variables, parameters, and return types helped catch potential bugs early in development. For instance, the Product class defines typed properties for id, name, and price, preventing invalid assignments like a string to a numeric price. I also used access modifiers (public, private) to enforce encapsulation and control property access, aligning with OOP best practices.

The Product class showcases abstraction by encapsulating data and behavior, making it easier to manage and reuse. The discountCalculator.ts module applies separation of concerns by housing a utility function independent of product data, promoting cleaner and more modular code.

Although asynchronous operations weren’t directly used in the current version, I designed the structure with future scalability in mind—such as integrating API calls. I experimented with async/await patterns during testing to simulate data fetching, ensuring that the architecture could support asynchronous logic when needed.

One challenge was designing robust error handling. I added input validation to prevent invalid states, such as negative prices or discount percentages over 100%. Descriptive errors were thrown when needed, and I used try/catch blocks in testing to ensure graceful failure and feedback.

This project enhanced my understanding of TypeScript and OOP. I gained confidence in writing type-safe code and structuring components with long-term maintainability in mind. The experience also reinforced how useful modular design and defensive programming are in building reliable applications.
