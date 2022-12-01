/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const bluePack = {
  name: "Everyday Pack",
  color: "darkblue",
  volume: 30,
  pocketNum: 4,
};

const addPack = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Color: ${currentPack.color}</li>
      <li>Volume: ${currentPack.volume}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const everydayArticle = addPack(bluePack);
console.log(everydayArticle);

const main = document.querySelector("main");
main.append(addPack(bluePack));
//or
main.append(everydayArticle);
