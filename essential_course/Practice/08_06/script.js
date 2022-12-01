/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const redPack = {
  name: "SchoolPack",
  color: "red",
  volume: 27,
  numPockets: 2,
};

function standardFunc_1 (currentPack) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentPack.name}</h1>
        <ul>
          <li>Color: ${currentPack.color}</li>
          <li>Volume: ${currentPack.volume}</li>
          <li>Number of packets: ${currentPack.numPockets}</li>
        </ul>
    `;
    return newArticle;
}

const main = document.querySelector("main");
main.append(standardFunc_1(redPack));

const standardFunc_2 = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Color: ${currentPack.color}</li>
      <li>Volume: ${currentPack.volume}</li>
      <li>Number of packets: ${currentPack.numPockets}</li>
    </ul>
  `;
  return newArticle;
};

// const main = document.querySelector("main");
main.append(standardFunc_2(redPack));

const arrowFunc = (currentPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Color: ${currentPack.color}</li>
      <li>Volume: ${currentPack.volume}</li>
      <li>Number of pockets${currentPack.numPockets}</li>
    </ul>
    `;
    return newArticle
};

main.append(arrowFunc(redPack));
