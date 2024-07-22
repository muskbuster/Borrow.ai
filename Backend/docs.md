**1. Get Pool Details**

* **URL:** `/api/get-pool-details/:asset/:poolAddress`
* **Method:** GET
* **Request Body:** None
* **Query Parameters:**
    * `asset`: Address of the asset you want details for.
    * `poolAddress`: Address of the pool you want details for.
* **Response:**
    * **On success:**
        * `tokens`: Object containing reserve tokens and their corresponding addresses. (e.g. `{ "Dai Stablecoin": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", ...}`)
        * `liquidityIndex`: Liquidity index of the pool.
        * `currentLiquidityRate`: Current liquidity rate of the pool.
        * `currentStableBorrowRate`: Current stable borrow rate of the pool.
        * `accruedToTreasury`: Total accrued protocol fees.
    * **On error:**
        * `{ error: "An error occurred while fetching pool details." }`
     
    
**2. Get Reserve Tokens**

* **URL:** `/api/reserves/:poolAddress`
* **Method:** GET
* **Request Body:** None
* **Query Parameters:**
    * `poolAddress`: Address of the pool you want to get reserve tokens for.
* **Response:**
    * **On success:**
        * Object containing reserve tokens and their corresponding addresses. (e.g. `{ "Dai Stablecoin": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", ...}`)
    * **On error:**
        * `{ error: "An error occurred while fetching reserve tokens." }`

**3. Check if Reserve Exists**

* **URL:** `/api/reserve-exists/:asset/:poolAddress`
* **Method:** GET
* **Request Body:** None
* **Query Parameters:**
    * `asset`: Address of the asset you want to check.
    * `poolAddress`: Address of the pool you want to check.
* **Response:**
    * **On success:**
        * `{ exists: true }` (if the reserve exists)
        * `{ exists: false }` (if the reserve does not exist)
    * **On error:**
        * `{ error: "An error occurred while checking reserve existence." }`

**4. Execute Borrow (This functionality is not fully implemented yet)**

* **URL:** `/api/execute-borrow`
* **Method:** POST
* **Request Body:**
    * `asset`: Address of the asset you want to borrow.
    * `amount`: Amount of the asset you want to borrow.
    * `interestRateMode`: Interest rate mode (1 for stable, 2 for variable).
    * `referralCode`: Referral code (optional).
    * `onBehalfOf`: Address of the user who will receive the borrowed asset (optional).
* **Response:**
    * **On success:**
        * `{ receipt: "..." }` (receipt of the borrow transaction)


 **5.Execute Deposit (Functionality not implemented yet)**

* **URL:** `/api/execute-deposit`
* **Method:** POST
* **Request Body:**
    * `asset`: Address of the asset you want to deposit.
    * `amount`: Amount of the asset you want to deposit.
    * `onBehalfOf`: Address of the user who will receive the deposited asset (optional).
    * `referralCode`: Referral code (optional).
* **Response:**
    * **On success:**
        * `{ receipt: "..." }` (receipt of the deposit transaction)
