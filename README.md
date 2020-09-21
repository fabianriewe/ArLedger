# ArLedger
Latest contract Source: fhD_E9u3BS9VQiLQnBfutL73C0agDRO8zZSEew3Uy38`
## About this project
A ledger contains transactions in chronological order. Data can not be modified or deleted.
 Ledgers are typically used to record a history of economic and financial activity in an organization. 
Many organizations build applications with ledger-like functionality because they want to maintain an accurate history 
of their applications' data. For example, they might want to track the history of credits and debits in banking 
transactions, or trace the movement of an item in a supply chain network. 
Ledger applications are often implemented using custom audit tables or audit trails created in relational databases.

With ArLedger, the history of changes to your data is immutable and stored decentralised on the Arweave-Network. 

The difference between this approach and just querying tagged transaction is,
that this approach has an underlying smart-contract which allows querying and accessing the data directly. 
When using a filter on transactions you can not do any filtering or selecting on the data itself.
Another feature is that this allows individual deployment and access control.
## Usage
### Ledger Setup
1.  Install the SmartWeave CLI
    ```
    npm install -g smartweave
    ```
1.  Create an initial state file. Save is as `state.json`
    ```json
    {
      "ledgerName": "[YOUR LEDGER NAME]",
      "tables": {}
    }
    ```
2.  Create a new ledger with the following command
    ```
    smartweave fhD_E9u3BS9VQiLQnBfutL73C0agDRO8zZSEew3Uy38 state.json --key-file [YOUR KEYFILE]
    ```

### Interacting with the ledger
Note: Use this data as the object for an interaction with the SmartWeave-Contract
#### Create a table
`{"function": "CREATE TABLE", "name": "Users"}`
#### Insert data into a table
`{"function": "INSERT INTO", "name": "Users", "data": {"firstName": "Fabian", "lastName": "Riewe"}}`
#### Select data from a table
##### Select all fields
`{"function": "SELECT", "from": "Users", "fields": ["*"]}`
##### Select specific fields
`{"function": "SELECT", "from": "Users", "fields": ["firstName"]}`
##### Select with `where`
`{"function": "SELECT", "from": "Users", "fields": ["firstName"], "where": ["lastName", "eq", "Riewe"]}`
## Examples
I have placed some helpful scripts in `scripts`.

## Next steps
*   Build a wrapper which is able to compile a query-language into transaction-objects. Example:
    ```
    SELECT firstName, lastName
    FROM Users
    ```
    will turn into:
    `{"function": "SELECT", "fields": ["firstName", "lastName"], "from": "Users"}`
*   Build a VueJS sandbox and deploy it to Arweave
*   Add more options to `SELECT`-Operation
*   Provide some real examples
*   JS/Python SDK
*   Think about a FIFO-Queue to keep transactions in place
*   Validate input data