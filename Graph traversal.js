// Visiting/Updating/Checking each vertex in a graph
// Depth First 
// Explore as far as possible down one branch before "backtracking"

// DFS(vetex){ //Depth First Search
        //       A
        //   /        \
        // B             C
        // |             |
        // D ___________ E
        // \             /
        //  \          /      
         //        F

// {
//   "A": ["B", "C"], 
//   "B": ["A", "D"],
//   "C": ["A", "E"],
//   "D": ["B", "E", "F"],
//   "E": ["C", "D", "F"],
//   "F": ["D", "E"]
// }
// {
//  "A": true,
//  "B": true,
//  "D": true,
//  "E": true, 
//  "C": true,
//  "F": true
// }
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")
// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "D")
// g.addEdge("C", "E")
// g.addEdge("D", "E")
// g.addEdge("D", "F")
// g.addEdge("E", "F")


class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  addEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !==vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !==vertex1
      );
    }
    depthFirstRecursive(start){
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex]  = true;
        result.push(vertex);
        adjecencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]){
            return dfs(neighbor)
          }
        });
      })(start);
      return result;
      }    
    

    // DFS - Itarative(start)(povtoryayushiysya) With Stack
    depthFirstIterative(start){
      const stack = [];
      const result = [];
      const visited = {};
      let currentVertex;
    
      visited[start] = true;
      while ( stack.length){
       currentVertex = stack.pop();  
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach(neighbor =>{
          if (!visited[neigbor]){
            visited[neighbour] = true;
            stack.push(neigbor)
          }
        });
      } return result
    }
    // Breadth First  Search Graph Traversal (BFS)
    breadthFirst(Start){
      const queue = [];
      const result = [];
      const visited = {};
      let currentVertex;
      visited[start] = true;
      while (queue.length){
        let currentVertex = queue.shift();
        result.push(currentVertex);
      
      this.adjacencyList[currentVertex].slice().reverce().forEach(neighbor =>{
        if(!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
      }return result;
  }
         //       A
        //   /        \
        // B             C
        // |              |
        // D ------------ E
        // \             /    
         //        F
// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "D")
// g.addEdge("C", "E")
// g.addEdge("D", "E")
// g.addEdge("D", "F")
// g.addEdge("E", "F")
// Queue:[B, C]
// Result[A,B,C,D,E,F]