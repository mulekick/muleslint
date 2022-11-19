// returns the error count on the sample file
module.exports = results => results.map(x => x.errorCount).at(0);