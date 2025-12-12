---
Title: Exploring Ecommerce Sales Data to Build Executive Summary
Date: 2025-12-09T22:44:00
Status: Child
description: Ecommerce sales data analysis to understand critical business inflection point.
tags:
  - data
  - DataAnalysis
  - DataModeling
  - DataVisualization
  - "#SQL"
  - "#Excel"
---
## 🧑‍💻Critical Business Understanding from Ecommerce Executive Summary Analysis
## ↗️ Executive Summary:
![Dashboard](https://github.com/user-attachments/assets/c4c34ccc-d7dd-4dbd-b1f6-127596a6843d)

---


### 🎯Objective:

The objective is to build a visualization that supports business decision instantly. To support this I measured four key performance indicators supported by four point estimator to facilitate the understanding.
- Month over month trend lines by revenue
- Year over year revenue and cost comparison
- Regional Performance Percentage
- Top Performing Product
Supporting Key point estimators in cards: `Total Revenue` `Total Profit Margin` `Gross Profit Margin` `Average Order Value` 

---
### Dataset: [ecommerce_sales_34550.csv](/Dataset)

This synthetic dataset represents **E-commerce sales transactions** containing **34,500 records across 17 features**. 
### 📊 Columns Overview

- `order_id` → Unique identifier for each order
- `customer_id` → Unique identifier for each customer
- `product_id` → Unique identifier for each product
- `category` → Product category (Electronics, Fashion, Home, Beauty, Sports, Toys, Grocery)
- `price` → Unit price of the product
- `discount` → Discount applied (%)
- `quantity` → Number of items purchased
- `payment_method` → Payment type (Credit Card, Debit Card, UPI, PayPal, COD, Wallet)
- `order_date` → Date of purchase
- `delivery_time_days` → Days taken to deliver the order
- `region` → Geographic region of the customer
- `returned` → Whether the product was returned (Yes/No)
- `total_amount` → Final bill amount after discounts
- `shipping_cost` → Delivery charges
- `profit_margin` → Profit earned from the order
- `customer_age` → Age of the customer (18–70)
* `customer_gender` → Gender of the customer (Male/Female/Other)

---
### 📈 Month over Month Trend line:

**Scenario:** Throughout the year monthly percentage growth was always around the average of 1% growth. This follows the same pattern with minimal dip in the month of January, August and November up until 2024. However, in 2025 there is a sharp decline of -62% in September, an average around USD 100,000 loss in comparison to September 2024 and 2023. Start of holidays can be one of the reasons, additionally decreasing marketing budget could be the reason of losing customers.

**Solution:** Increasing marketing budget and targeting high price category customer in high conversion rate channels could be a moderate solution to tackle this decline. 

### 💹 Year over Year Comparison:

**Scenario:** -30.93% negative revenue explains that the business still need to achieve 30.93% worth of revenue to match the sales amount of 2024 in Q4 of 2025. 

**Solution:** Creating a massive 11.11 and 12.12 sales campaign can match the sales amount of 2024. This will help the business to keep a healthy total profit margin to recuperate for any further loss.

### 🗺️ Regional Performance:

**Scenario:** A clear well-balanced sales in all the regions in terms of revenue. The business is doing to good to attract customers in all regions simultaneously. 

### 📻 Top 3 Product:

**Scenario:** Electronics is accounted for 56.59% of the total revenue to date. But can it be increased? Most expensive pricing items holds the answer for this. Even though the electronics has the highest amount of order, most of the orders came from low price segments. We have only **9 sales pricing > 2000$**, a shocking revelation. 

**Solution:** Increasing marketing budget and create a lucrative sales campaign for higher pricing segments to catch the upcoming holiday expenses will improve the sales on the higher pricing segments.

---
### Conclusion: 
Two Decision to make to maintain the business profit margin:
- Launching a sales campaign of the year with more marketing budget to tackle the September 2025 negative revenue trends. 
- Providing combo offer for existing stock of beauty product because of the **lowest cost to revenue ratio** of only **0.6** and **18%** of the total order amount, **the highest**.


Reference:
[github](https://github.com/mehedihassanome/Ecommerce-Dashboard)

