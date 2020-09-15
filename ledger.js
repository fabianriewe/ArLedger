export function handle(state, action) {

    let tables = state.tables;

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
        let filteredData = []
        for (let d of data) {
            let subset = fields.reduce(function(o, k) { o[k] = d[k]; return o; }, {});
            filteredData.push(subset)
        }

        return {"result": filteredData}
    }

    throw new ContractError(`Invalid input`);
}