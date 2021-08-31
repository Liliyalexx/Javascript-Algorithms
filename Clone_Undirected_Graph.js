// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }


// A - B              
// |   |  \
// |   |    E
// |   |   /
// C - D  /   
// _________________
// A - B
// |   |  \
// |   |    E
// |   |   /
// C - D  / 
// Java Solution
class Solution {
  public GraphVertex cloneGraph(GraphVertex start) {
    // If the start node is null then we cannot do any cloning
    if (start == null) {
      return null;
    }

    /*
     * vertexMap: Map the original node reference to its clone
     * queue: Our queue for Breadth First Search
     */
    Map<GraphVertex, GraphVertex> vertexMap = new HashMap<>();
    Queue<GraphVertex> queue = new LinkedList<>();

    var MyHashMap = function () {
      this.keyArr = [];
    };
    
    //  value will always be non-negative.

    // Add the start node to the queue. Give the start node a clone in the vertexMap
    queue.add(start);
    vertexMap.put(start, new GraphVertex(start.val));

    /*
     * The breadth first search continues until we have processed all vertices in
     * the original graph. We know this is done when the queue is empty
     */
    while (!queue.isEmpty()) {
      // We grab a node. We will express all of the edges coming off of this node.
      GraphVertex currVertex = queue.remove();

      // Iterate over all adjacents.
      for (GraphVertex neighbor : currVertex.adjacents) {
        // Has this neighbor been given a clone?
        if (!vertexMap.containsKey(neighbor)) {
          /*
           * No? Give it a mapping and add the original neighbor to the search queue so we
           * can express ITS edges later
           */
          vertexMap.put(neighbor, new GraphVertex(neighbor.val));
          queue.add(neighbor);
        }

        /*
         * Draw the edge from currVertex's clone to neighbor's clone. Do you see how our
         * hashtable makes this quick access possible?
         */
        vertexMap.get(currVertex).adjacents.add(vertexMap.get(neighbor));
      }
    }

    // Return the clone of the start. This is the entry point for the cloned graph
    // section.
    return vertexMap.get(start);
  }
}

// Time and Space complexity: 

// Time: O (|V| + |E|)

// JavaScript Solution

function cloneGraph(node) {
  const map = new Map();
  return clone(node);
  
  function clone(node) {
    if (!node) return null;
    if (map.has(node.val)) return map.get(node.val);
    
    const newNode = { val: node.val, neighbors: [] };
    map.set(node.val, newNode);
    for (let n of node.neighbors) {
      newNode.neighbors.push(clone(n));
    }
    return newNode;
  }
}