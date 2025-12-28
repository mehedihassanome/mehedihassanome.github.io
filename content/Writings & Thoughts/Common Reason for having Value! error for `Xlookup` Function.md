## Common Reason for having `#Value!` error for `Xlookup` Function
### **Xlookup Formula:**

```excel
XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
```

While doing some data cleaning and trying to retrieve some `unknown, error, emply` values for `Quantity`, `Price Per Unit` columns values, I used `xlookup` and hit this error: 
## Datasets
![[Pasted image 20251228163522.png]]

**Problematic function:**

```excel
XLOOKUP([@[Price Per Unit]],product_price_list[#all], product_price_list[Product Item], "",0)
```

this was giving us a `#Value!` error.

There are basically three problem that causes the `#Value!`

**Common Problem:**
1. Now, in two cases we can have `#Value!` error for `Xlookup` if `return_array` is not managed properly like mistakenly providing `col_index_num` thinking it is acting like `vlookup` 🤤. 
2. if the `row value` you are referring in the `lookup_value` has hidden spaces around them in that case you have already been pulling a lot of hairs 😅.

**The actual problem:**
3. But real problem above was referring to the full `product_price_list[#all]`  table.

**Solution:** 
1. When starting with Data Cleaning **Trim** `categorical data column`, `text/string column` to have some peace of mind.
2. `lookup_array` here need to be referred for only one column from the `product_price_list` in this case `product_price_list[price per unit]` now `lookup_array` is receiving proper `array values` for it to lookup for `Xlookup` function. 🏆

**Solved Function:**
```excel
XLOOKUP([@[Price Per Unit]],product_price_list[Price Per Unit], product_price_list[Product Item], "",0)
```

#xlookup #vlookup #lookupfunction #datacleaning #DataAnalysis 