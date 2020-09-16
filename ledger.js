export function handle(state, action) {

    let tables = state.tables;
    let ledgerName = state.ledgerName;

    if (action.input.function === 'CREATE TABLE') {

        tables[action.input.name] = []

        return {state}
    }

    if (action.input.function === 'INSERT INTO') {

        tables[action.input.name].push(action.input.data);

        return {state}
    }

    if (action.input.function === 'SELECT') {

        // TODO THIS CODE IS JUST PROC
        // from: https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties
        let data = tables[action.input.from]

        let fields = action.input.fields
        let where = action.input.where

        let operations = {
            'eq': (a, b) => {
                return a === b;
            }
        }

        //filter fields
        let filteredData = []

        if (where) {
            for (let d of data) {
                let expr1 = d[where[0]]
                let expr2 = where[2]
                let operation = where[1]

                if (operations[operation](expr1, expr2)) {
                    filteredData.push(d)
                }
            }
        } else {
            filteredData = data
        }


        let fieldData = []
        if (!fields.includes('*')) {
            for (let d of filteredData) {
                let subset = fields.reduce(function (o, k) {
                    o[k] = d[k];
                    return o;
                }, {});
                fieldData.push(subset)
            }
        } else {
            fieldData = filteredData
        }

        return {"result": fieldData}
    }

    throw new ContractError(`Invalid input`);
}