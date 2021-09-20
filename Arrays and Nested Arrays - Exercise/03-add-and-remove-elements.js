function addAndRemove(cmds) {
  const result = [];
  let num = 1;

  for (const cmd of cmds) {
    if (cmd == "add") {
      result.push(num++);
    } else {
      result.pop(num++);
    }
  }

  if (result.length == 0) {
    console.log("Empty");
  }

  console.log(result.join("\n"));
}

addAndRemove(["add", "add", "remove", "add", "add"]);
