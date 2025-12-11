## Insight with explanation of Why Max Function for Date

Because Excel consider Date Month Year as numerical value and it's start from 1900 hundred. and when you look into the date and turn the sheet into formula mode you will see the date(mmm-dd-yyyy) is just a numerical value. 


## The CALCULATE Function – The Heart of DAX ❤️
**Syntax**:
```dax
CALCULATE(<expression>, <filter1>, <filter2>, ...)
```

### Example 1: Single Filter (Yellow Products Only)
```dax
Yellow Order Quantity = 
CALCULATE(
    SUM('Sales 2020'[Order Quantity]),
    'Product'[Product Color] = "Yellow"
)
```

### Example 2: Multiple Filters (Yellow + Europe Only)
```dax
Europe Yellow Order Quantity = 
CALCULATE(
    SUM('Sales 2020'[Order Quantity]),
    'Product'[Product Color] = "Yellow",
    'Territory'[Continent] = "Europe"
)
```

**Use Case**: Perfect for specific KPIs with fixed criteria

### Dynamic Filtering with Slicers vs Fixed CALCULATE 🕹️
- Slicer → changes all visuals (interactive)  
- CALCULATE with hard-coded filter → fixed value (great for cards showing “Last Day Sales”, “Today vs Yesterday”, etc.)

#### Last Day Sales Example
```dax
Last Day Sales = 
CALCULATE(
    SUM('Sales 2020'[Order Quantity]),
    'Sales 2020'[Order Date] = MAX('Sales 2020'[Order Date])
)
```

> The reason we are using MAX('Sales 2020'[Order Date]) because the todays date is the highest numerical value among all the [Order Date] value.

#### Today's Sales 
```dax
Last Day Sales = 
CALCULATE(
    SUM('Sales 2020'[Order Quantity]),
    'Sales 2020'[Order Date] = Today())
)
```

> Today Function will not have any effect because there is no Today's value in the dataset. 

#### Yesterday Sales
* Everything same just `sales 2020[Order Date] = Today() - 1`, Logically it make sense `-1` should indicate the yesterday date. 
* Freaking Awesome!


One of the most used function for DAX measure is CALCUATE() function. The filter expression in CALCULALE() function is 