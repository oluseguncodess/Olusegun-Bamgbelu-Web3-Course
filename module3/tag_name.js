function byTagName(node, tagName) {
    let results = [];
    
    // Convert the tagName to uppercase for comparison
    tagName = tagName.toUpperCase();
    
    // Check if the current node matches the tagName
    if (node.nodeName === tagName) {
      results.push(node);
    }
  
    // check all child nodes
    for (let child of node.children) {
      results = results.concat(byTagName(child, tagName));
    }
  
    return results;
  }

  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);