module.exports.getDate = function() {
const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);
    return day
}

module.exports.getDay = function() {
const today = new Date();
    const options = {
        weekday: "long",
        // day: "numeric",
        // month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);
    return day
}

