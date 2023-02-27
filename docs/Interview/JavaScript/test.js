let tree = {
  id: "1",
  title: "节点1",
  children: [
    {
      id: "1-1",
      title: "节点1-1",
    },
    {
      id: "1-2",
      title: "节点1-2",
      children: [
        {
          id: "2",
          title: "节点2",
          children: [
            {
              id: "2-1",
              title: "节点2-1",
            },
          ],
        },
      ],
    },
  ],
};

// function bfs(root) {
//   let nodes = []
//   const queue = [root];
//   while (queue.length > 0) {
//     const node = queue.shift();
//     nodes.push(node.id)
//     node.children?.forEach(child => {
//       queue.push(child);
//     });
//   }
//   return nodes
// }
function bfs(node) {
  let nodes = []
  if (node !== null) {
    nodes.push(node)
    let i = 0
    while (node = nodes[i++]) {
      node.children && nodes.push(...node.children)
    }
  }
  return nodes
}

console.log("[ dfs(tree) ]-34", bfs(tree));
