`SUMX(table, expression)` is a iterator function it can take table and an expression. But why call it an expression instead of a table as it takes the whole table as an input. Would not it be easier to just have the function as `SUMX(Table, ...)`? That would be straight forward. The easier answer is `SUMX(expression)` can take other scalar values, function etc.

But why when we are passing a whole table and it still calling it an expression?

It's Actually interesting, why SUMX does not call it a table. `SUMX` as the ultimate value return a scalar value but it allows iterating though the whole table. Let me explain it with an example,

`Total Sales = SUMX('Sales_table', 'Sales_table'[Price] * 'Sales_table[Quantity])`

You see that in the expression it is taking `Sales_table` as a value via creating a table expression once to get the table to do the calculation on the go by iterating over it. In other words it is creating a copy/expression of the `'Sales_table'` inside the expression to iterate over the rows one by one to calculate the `'Sales_table'[Price] * 'Sales_table[Quantity]` to get `Total Sales`.  Ones it is done with the function it just operate through it from the memory. Here are some more nested function with `SUMX` like below how `FILTER`  is creating a expression that the `SUMX` will use for the first row and then again for next row, and so on. 

`SUMX(FILTER('Sales', [Price] > 100), [Price] * [Quantity])`

So, the `SUMX` will apply the rule from filter function on the first row of the `Sales` table to evaluate if the `[Price] > 100` and based on that it will execute the rest of the arguments, in the above case `[Price] * [Quantity]`. And it will do the same thing for the next row until it reaches a `Price` row where `Price` is no longer `> 100`. Here are more examples of function for you to understand how this works,

```DAX
SUMX(ADDCOLUMNS('Sales', "Profit", [Price] - [Cost]), [Profit])

SUMX(TOPN(10, 'Products', [Sales Amount]), [Stock])

SUMX(VALUES('Date'[Year]), CALCULATE(SUM('Sales'[Amount])))
```

See? You're not just passing 'Sales_table' — you're passing a **dynamic table expression** that gets evaluated **once**, at the beginning of the iteration, and the result of that expression becomes the table that SUMX iterates over.

So Microsoft calls it an **expression** (not a table) because:

- It has to be something that **produces** a table, not necessarily a stored table
- It can be filtered, transformed, combined, ranked, etc., right inside the argument
- It's evaluated in the current filter context (so SUMX('Sales', ...) and SUMX(ALL('Sales'), ...) behave totally differently!)

Pretty Cool! right?