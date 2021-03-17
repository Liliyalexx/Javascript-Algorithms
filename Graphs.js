// A Graph Data Structure 
// consists of a finite (and possibly mutable) set of vertices or nodes or points, 
// together with a set of unordered pairs of these vertices 
// for an undirected graph or a set of ordered pairs for a directed graph.
// GRAPHS - NODES + CONNECTIONS
// Uses for Graphs:
// -Social Networks
// -Location/Mapping
// -Routing Algorithms
// -Visual Hierarchy
// -File System Optimizations
// -Everywhere
// Vertex - a node, 
// Edge - connection between nodes
//  Graphs: Adjacency list, Hashtable

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
// addVertex("Tokyo")
// {
//   "Tokyo": []
// }
addVertex(vertex){
  if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }


// var g = new Graph
// g.addVertex("Tokyo")
// g.addVertex("San francisco")
// g.adjencyList
// {Tokyo: Array(0), San Francisco:(0)}
//g.adjencyList[Tokyo].push("Something")
// g.adjencyList
// {Tokyo:Array(1), Sanfrancisco:(0)}

// Add Edge Intro

// {
//   "Tokyo": [],
//   "Dallas": [],
//   "Aspen":[]
// }
// g.addEdge("Tokyo", "Dallas")
//              |
// {
  // "Tokyo":["Dallas"],
  // "Dallas": [Tokyo],
  // "Aspen": []
  //   }
addEdge(v1,v2){
  this.adjacencyList[v1].push(v2);
  this.adjacencyList[v2].push(v1);
}

// let g =new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");


// REMOVE EDGE

// {
  // "Tokyo":["Dallas"],
  // "Dallas": [Tokyo],
  // "Aspen": []
  //   }
// g.removeEdge("Tokyo", "Dallas")
// {
  // "Tokyo":[],
  // "Dallas": [],
  // "Aspen": []
  //   }
removeEdge(vertex1, vertex2){
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    v => v !==vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !==vertex1
  );
}


}
// REMOVING A VERTEX
// {
//   "Tokyo": ["Dallas", "Hong Kong"],
//   "Dallas":["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
//   "Aspen": ["Dallas"],
//   "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
//   "Los Angeles": ["Hong Kong", "Dallas"]
// }
// g.removeVertex("Hong Kong")
// {
//   "Tokyo": ["Dallas", ],
//   "Dallas":["Tokyo", "Aspen", , "Los Angeles"],
//   "Aspen": ["Dallas"],
//   "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
//   "Los Angeles": ["Dallas"]
// }
removeVertex(vetex){
while(this.adjecencyList[vertex].length){
  const adjacentVertex = this.adjacencyList[vertex].pop();
  this.removeEdge(vertex, adjacentVertex)
}
delete this.adjacencyList[vertex]
}