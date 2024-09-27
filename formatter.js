// returns the error count on the sample file
export default results => results.map(x => x.errorCount).at(0);