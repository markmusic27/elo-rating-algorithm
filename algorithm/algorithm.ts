// Formula 1 (to update the rating of a player)
const formula1 = (ratingF: number, scoreF: number, expectedScoreF: number) =>
  Math.round(ratingF + 32 * (scoreF - expectedScoreF));
// Formula 1 (to update the rating of a player)

//Formula 2 Player A (to predict the outcome of a game)
const formula2PA = (ratingA: number, ratingB: number) => {
  let equation: number = (ratingA - ratingB) / 400;
  equation = Math.pow(10, equation);
  equation = equation + 1;
  equation = 1 / equation;
  return equation.toFixed(2);
};
//Formula 2 Player A (to predict the outcome of a game)

//Formula 2 Player B(to predict the outcome of a game)
const formula2PB = (ratingA: number, ratingB: number) => {
  let equation: number = (ratingB - ratingA) / 400;
  equation = Math.pow(10, equation);
  equation = equation + 1;
  equation = 1 / equation;
  return equation.toFixed(2);
};
//Formula 2 Player B(to predict the outcome of a game)

//Function used to update player's rating
const updateRating = (rating, score, expectedScore) => {
  let returnObj = {
    oldRating: rating,
    newRating: formula1(rating, score, expectedScore),
  };
  return returnObj;
};

//Function used to predict outcome
const predictOutcome = (ratingA: number, ratingB: number) => {
  let returnObj = {
    rating_a: ratingA,
    rating_b: ratingB,
    prediction_a: formula2PA(ratingA, ratingB),
    prediction_b: formula2PB(ratingA, ratingB),
  };
  return returnObj;
};
