---
Title:
Date: 2025-12-21T12:48:00
Status: Child
description: Revenue Analysis of a Beverage Brand to drive future business decision
tags:
  - PowerBI
  - PowerQuery
  - dax
  - DataVisualization
  - DataAnalysis
  - DataModeling
---
## 💹Revenue Analysis of Retailers for Beverage Company with Time Intelligence

![[Pasted image 20251222122556.png]]

### Tools  & Methods:

`Microsoft Power BI`, `Excel`, `Data Modeling`, `Data Analysis`, `Data Visualization`, `Time Intelligence` , `DAX measures` etc.   
### 🎯Objective:

The main objective is to create a dashboard that supports business revenue analysis across multiple dimension for retailers. To support this objective, we utilized our revenue analysis with data visualization by month, multiple point estimators, comparison chart and pie chart, achieving three key objectives:

- Monthly and Daily Revenue Trends to date
- Total Revenue by Beverage Brand
- Comparison between total profit and total beverage

Key  Supporting Point Estimators:  Total Revenue, Total Units, Average Price.
Key Slicers: Beverage Brand, Division, District.

### Datasets: 

This synthetic dataset represents a 
- Fact Table with company's retailer sales data containing 3,740 records across 10 features.
- And Two Dimension table 
	- Date Table (*marked as date table*) 
	- Cost Table

### Table Column Overview:

> [!abstract] Fact Table
> - **Retailer**: (BevCo, DreamCo, FizzySip, Sodapop)
> - **Retailer ID**: Unique Identifier
> - **Date**: Purchase order date
> - **Month**: Purchase order month
> - **Division / District**: Geographic markers
> - **Beverage Brand**: Product name
> - **Price per Unit**: Sales price
> - **Units Sold**: Quantity
> - **Cost Per Unit**: Expense per unit

> [!info] Date Table
> - **Date / Month / Month Name**
> - **Year / Quarter**

> [!money] Cost Table
> - **Beverage Brand**
> - **Production Cost Per Unit**

### Star Schema:
![[Pasted image 20251222115418.png]]
Both `cost` and `date` dimension table is connected to the sales table:`Data` as one to many connection method in the semantic model. 
### Challenges
- Trend Analysis was the biggest challenge in this dashboard. 
- Time intelligence related issues with proper month no. order to visualize sales month wise data.
- Unique Identifier e.g., `Retailer ID` Data automatically getting aggregated because of having integer value. 
## Solution
- Applying "Marked as a Date Table" on the date dataset to consider as a proper date table to handle time intelligence related calculation
- In Power Query from in the `Add Column` > `Date` option to apply `Month Number` column in date table. This allows `Date` table to have proper filter option on  the `Month Name` column in ascending order.
- While applying Line chart from visualization option as "Insert" now we can visualize the trend line in proper month name order e.g., Jan, Feb, Mar etc.

Reference:




