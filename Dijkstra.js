// Simple Priority Queue (PQ)
class PriorityQueue {
  constructor(){
   this.values = [];
  }
  enqueue (val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a,b) => a.priority - b.priority);
  };
  }
O(N*log(N))
// 
class WeightedGraph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});

  }
  Dijkastra(start, finish){
     const nodes = new PriorityQueue();
     const distances = {};
     const previos = {};
     let path = [] //to return at the end
     let smallest;
     //build up initial state
     for (let vertex in this.adjacencyList){
       if(vertex ===start){
         distances[vertex] = 0;
         nodes.enqueue(vertex, 0);
       } else{
         distances[vertex] = Infinity;
         nodes.enqueue(vertex, Infinity);
       }
       previous[vertex] = null;

     }
      // as long as there is something to visit
      while (nodes.values.length){
        smallest = nodes.dequeue().val;
       if(smallest ===finish){
         console.log(distances);
         console.log(previous);
        //  We are done
        // Build up path to return at end
        while(previous[smallest]);
          path.push(smallest);
          smallest = previous[smallest];
       }
       break;

      }
       if (smallest || distances[smallest] !== Infinity){
         for(let neighbor in this.adjacencyList [smallest]){
           let nextNode = this.adjacencyList[smallest] [neighbor]
           console.log(nextNode);
          //  calculate new distance to neighboring nodes
          let candidate = distances[smallest] + nextNode.weight;// Sum = D+E
          let nextNeighbor = nextNode.node
          if(candidate < distances[nextNode.node]) { // E
            // updating new samallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous -HOw we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
           
         }
       }
       return path.concat(smallest).reverse();
      }
  }



  
var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]