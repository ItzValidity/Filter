

const correctStatement = 102002;
const manyDifferentStatements = [102002, 83927384, 23213233, 23432546];

const filtered = manyDifferentStatements.filter(function(value) {
    return value == correctStatement;
});

console.log(filtered);