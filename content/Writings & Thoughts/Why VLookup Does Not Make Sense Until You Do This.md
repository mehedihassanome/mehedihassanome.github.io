Because we are dealing with Fact Table and Dimension Table, beginning of our learning excel does not give us an in-depth understanding of the difference between Fact table and Dimension table. 

This is Exactly what you are using inside the `Vlookup(Lookup Value, Table Array, Col Index, Range Lookup)` function to set value for each of the `vlookup` arguments; in the excel sheet by utilizing two different tables or dataset (in the same sheet or different work sheet in the same excel workbook).

**Fact Table Vs Dimension Table**

**Fact Table:** Think about when you order something online, your order create a new row In ecommerce's  product order/sales table This is your fact table that has all the data and changing constantly with new order data each time someone order a product. Get it!

**Dimension Table:** This table is ecommerce's product table here it has all the information about the product, `name, product id, price, shops name etc.` this is what called a dimension table for `vlookup` this our `table array` argument. Or think about all the shop that have their products in the ecommerce. There is a table for all these shops`shop name, shop id, region, address, owner name etc.` These tables are not changing constantly rather they got updated. 


| B3                                                           | B4  |
| ------------------------------------------------------------ | --- |
| =Vlookup(Lookup Value, Table Array, Col Index, Range Lookup) |     |

```
Vlookup(Lookup Value, Table Array, Col Index, Range Lookup)

Lookup Value > is a column value from the fact table

Table Array > is your dimension table or data columns with rows to fetch values that matches with lookup value.

Col Index > This is also from dimension table that matches with lookup value to return in the vlookup invoking cell.

Range Lookup > The value from the 'Lookup Value' and 'Table Array' when matching do you want exact match or relative match. 
```

Now you see, it's easy!

**Bonus:** Use `IFERROR` with `Vlookup`, when `Vlookup` gives null or spill error with an actual text string `not found` or `Not Available`.

