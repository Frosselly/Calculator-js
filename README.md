Simple calculator for js practice

## Overview
- Can do basic arithmetic operations such as: divide, add, multiply and subtract
- Basic error handling returning 'NaN' to user

### Architecture
- `operatorLogic`
1. handles figuring out the sign between the numbers
2. calls `operate`
3. updates DOM from results
- `operate` - based on found sign assigns the calculation function (add, subtract, etc.)

## Installation
Clone and open `index.html`

