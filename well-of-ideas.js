// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// ************My Solution**********

function well(x) {
  const goodCount = x.reduce(
    (count, idea) => (idea === "good" ? count + 1 : count),
    0
  );

  if (goodCount === 1 || goodCount === 2) {
    return "Publish!";
  } else if (goodCount > 2) {
    return "I smell a series!";
  } else {
    return "Fail!";
  }
}
