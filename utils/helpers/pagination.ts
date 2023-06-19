const queue: number[] = [0];

// The function gets the current page, checks if the checkboxes, radio and text
// are marked, and return the page it goes to.
// I'm hacking storing this information in the step field of the buttons
// It's a temporary fix
export const getCurrentPage = () => {
  // The forth node is the node responsible for the inputs
  const element: any = document.getElementById(String(queue.at(-1)));
  const childNodes = element.children[2].children;
  
  if (element.children[2].type === 'text' && element.children[2].value.replace(/[^a-z1-9]/gi, "").length >= 1) {
    return element.children[2].step;
  }

  if (element.children[2].type === 'text' && element.children[2].classList.contains('hidden')) {
    return element.children[2].step;
  }

  for (let i = 0; i < childNodes.length; i++) {
    const childestNode = childNodes[i].children;

    for (let j = 0; j < childestNode.length; j++) {
      const child = childestNode[j];

      if (child.type === "radio" && child.checked) {
        return child.step;
      }

      if (child.nodeName.toLowerCase() === 'tr') {
        const trNode = child.childNodes;
        for (let k = 0; k < trNode.length; k++) {
          if (trNode[k].firstElementChild?.checked) {
            return trNode[k].firstElementChild.step;
          }
        }
      }
    }
  }

  return false;
}

// Go to the next page
export const handlePagesFw = () => {
  const page = queue.at(-1);
  const pageTo: any = getCurrentPage();

  if (pageTo) {
    queue.push(Number(pageTo));
    const pageToggle = document.getElementById(String(page)) as HTMLButtonElement | null;
    const pageToggleBack = document.getElementById(String(queue.at(-1))) as HTMLButtonElement | null;
    
    if (pageToggle) {
      pageToggle.classList.toggle('hidden');
    }

    if (pageToggleBack) {
      pageToggleBack.classList.toggle('hidden');
    }

    return true;
  }

  return false;
};

// Return to the earlier page in the queue
export const handlePagesBw = () => {
  const page = queue.at(-1);

  if (queue.at(-1)) {
    queue.pop();
    const pageToggle = document.getElementById(String(page)) as HTMLButtonElement | null;
    const pageToggleBack = document.getElementById(String(queue.at(-1))) as HTMLButtonElement | null;

    if (pageToggle) {
      pageToggle.classList.toggle('hidden');
    }

    if (pageToggleBack) {
      pageToggleBack.classList.toggle('hidden');
    }

    return true;
  }

  return false;
}
