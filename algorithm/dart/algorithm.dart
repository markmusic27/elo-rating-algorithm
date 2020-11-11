import 'dart:math' as Math;

enum SolveFor { playerA, playerB }

class EloRating {
  double formula1(
          {double ratingFinal, double scoreFinal, double expectedScoreFinal}) =>
      ratingFinal + 32 * (scoreFinal - expectedScoreFinal).round();

  double formula2({double ratingA, double ratingB, SolveFor solveFor}) {
    double equation = ((solveFor == SolveFor.playerA ? ratingA : ratingB) *
        (solveFor == SolveFor.playerA ? ratingB : ratingA));

    equation = Math.pow(10, equation);

    equation = equation + 1;
    return (1 / equation).roundToDouble();
  }

  Map<String, double> updateRating(
          {double rating, double score, double expectedScore}) =>
      {
        "oldRating": rating,
        "newRating": formula1(
          ratingFinal: rating,
          scoreFinal: score,
          expectedScoreFinal: expectedScore,
        )
      };

  Map<String, double> predictOutcome({double ratingA, double ratingB}) => {
        "ratingA": ratingA,
        "ratingB": ratingB,
        "predictionA": formula2(
            ratingA: ratingA, ratingB: ratingB, solveFor: SolveFor.playerA),
        "predictionB": formula2(
            ratingA: ratingA, ratingB: ratingB, solveFor: SolveFor.playerB),
      };
}
