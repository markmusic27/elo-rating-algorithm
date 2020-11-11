// Formula 1 (to update the rating of a player)
var formula1 = function (ratingF, scoreF, expectedScoreF) {
    return Math.round(ratingF + 32 * (scoreF - expectedScoreF));
};
// Formula 1 (to update the rating of a player)
//Formula 2 Player A (to predict the outcome of a game)
var formula2PA = function (ratingA, ratingB) {
    var equation = (ratingA - ratingB) / 400;
    equation = Math.pow(10, equation);
    equation = equation + 1;
    equation = 1 / equation;
    return equation.toFixed(2);
};
//Formula 2 Player A (to predict the outcome of a game)
//Formula 2 Player B(to predict the outcome of a game)
var formula2PB = function (ratingA, ratingB) {
    var equation = (ratingB - ratingA) / 400;
    equation = Math.pow(10, equation);
    equation = equation + 1;
    equation = 1 / equation;
    return equation.toFixed(2);
};
//Formula 2 Player B(to predict the outcome of a game)
//Function used to update player's rating
var updateRating = function (rating, score, expectedScore) {
    var returnObj = {
        oldRating: rating,
        newRating: formula1(rating, score, expectedScore)
    };
    return returnObj;
};
//Function used to predict outcome
var predictOutcome = function (ratingA, ratingB) {
    var returnObj = {
        rating_a: ratingA,
        rating_b: ratingB,
        prediction_a: formula2PA(ratingA, ratingB),
        prediction_b: formula2PB(ratingA, ratingB)
    };
    return returnObj;
};
