# ArLedger
Note: This is just a proof of concept

# Usage
Note: Use this data as the object for an interaction with the SmartWeave-Contract
## Create a table
`{"function": "CREATE TABLE", "name": "foo"}`
## Insert data into a table
`{"function": "INSERT INTO", "name": "foo", "data": {"foo": "foo", "bar": "bar"}}`
## Select data from a table
`{"function": "SELECT", "from": "foo", "fields": ["foo"]}`