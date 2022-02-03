// code your solution here

function superbowlWin(record) {
    let isWin = record.find (function(record) {
        return record.result === 'W'
    })

    if (isWin) {
        return isWin.year
    } else {
        return
    }
}