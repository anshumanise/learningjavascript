// Define the array of student scores
const scores = [85, 90, 78, 88, 76, 95, 89];

function findHighestScore(scores) {
  // The goal is to find the highest score among the students.

  

  // Implement your logic below and return the highest score.

  if (scores.length === 0) return null;
  return scores.reduce((highest, current) => {

    return current > highest ? current : highest;

  }, scores[0]);
}

console.log(findHighestScore(scores));