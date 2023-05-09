const data = require('./data')

const returnDailyMessage = (day) => {
    return data.sentences[day -1]
}

exports.returnDailyMessage = returnDailyMessage 