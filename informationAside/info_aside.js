const app = document.getElementById('app');
const aside = document.createElement("aside");
app.appendChild(aside);
// ------------------------app > aside --------------------------------

function elememt(tagName){
  if(typeof(tagName)==="string"){
    return `<${tagName}></${tagName}>`;
  }
}

aside.innerHTML = `
  ${elememt("div")}
  ${elememt('div')}
  `;
  // ------------------app > aside > div*2 -------------------------------

  const div1 = document.querySelector("#app>aside>div:nth-child(1)");
  const div2 = document.querySelector("#app>aside>div:nth-child(2)");

function tagMaker (parentElement, containerName, itemName, itemCount){
  const container = document.createElement(containerName);
  for(let i = 0; i<itemCount; i++){
    let item = document.createElement(itemName);
    container.appendChild(item);
  }

  parentElement.appendChild(container);
}

tagMaker(div1, "div", "p", 0);
// -----------------------app > aside > div1 > div ----------------------------
tagMaker(div1, "div", "p", 1 );
// --------------------------app > aside > div1 > div > p ----------------------

tagMaker(div2, "div", "p", 1);
tagMaker(div2, "div", "p", 1);
tagMaker(div2, "div", "p", 1);
// -------------------------app > aside > div2 > (div > p) *3--------------------


// function elem (parentElement, itemName, itemCount){
//   const parent = document.querySelector(parentElement);
//   for(let i = 0; i<itemCount; i++){
//     let item = document.createElement(itemName);
//     parent.appendChild(item);
//   }
// }