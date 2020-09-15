# ArLedger
Note: This is just a proof of concept

## Usage
Note: Use this data as the object for an interaction with the SmartWeave-Contract
### Create a table
`{"function": "CREATE TABLE", "name": "foo"}`
### Insert data into a table
`{"function": "INSERT INTO", "name": "foo", "data": {"foo": "foo", "bar": "bar"}}`
### Select data from a table
`{"function": "SELECT", "from": "foo", "fields": ["foo"]}`
## Examples
I have placed some helpful scripts in `scripts`.

## Next steps
*   Build a wrapper which is able to compile a query-language into transaction-objects. Example:
    ```
    SELECT a, b
    FROM bar
    ```
    will turn into:
    `{"function": "SELECT", "fields": ["a", "b"], "from": "bar"}`
*   Build a VueJS sandbox and deploy it to Arweave
*   Add more options to `SELECT`-Operation
*   Provide some real examples
*   JS/Python SDK
*   Think about a FIFO-Queue to keep transactions in place