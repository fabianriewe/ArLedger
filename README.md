# ArLedger
Note: This is just a proof of concept
## About this project
A ledger contains transactions in chronological order. Data can not be modified or deleted.
 Ledgers are typically used to record a history of economic and financial activity in an organization. 
Many organizations build applications with ledger-like functionality because they want to maintain an accurate history 
of their applications' data. For example, they might want to track the history of credits and debits in banking 
transactions, or trace the movement of an item in a supply chain network. 
Ledger applications are often implemented using custom audit tables or audit trails created in relational databases.

With ArLedger, the history of changes to your data is immutable and stored decentralised on the Arweave-Network. 
## Usage
Note: Use this data as the object for an interaction with the SmartWeave-Contract
### Create a table
`{"function": "CREATE TABLE", "name": "Users"}`
### Insert data into a table
`{"function": "INSERT INTO", "name": "Users", "data": {"firstName": "Fabian", "lastName": "Riewe"}}`
### Select data from a table
`{"function": "SELECT", "from": "Users", "fields": ["firstName"]}`
## Examples
I have placed some helpful scripts in `scripts`.

## Next steps
*   Build a wrapper which is able to compile a query-language into transaction-objects. Example:
    ```
    SELECT firstName, lastName
    FROM Users
    ```
    will turn into:
    `{"function": "SELECT", "fields": ["a", "b"], "from": "bar"}`
*   Build a VueJS sandbox and deploy it to Arweave
*   Add more options to `SELECT`-Operation
*   Provide some real examples
*   JS/Python SDK
*   Think about a FIFO-Queue to keep transactions in place
*   Validate input data