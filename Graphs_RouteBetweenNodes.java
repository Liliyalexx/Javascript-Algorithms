class Graph{
  List<List<Integer>> graph;
  boolean visited[];
  int nodes;
  Graph (int nodes){
    graph = new ArrayList<>();
    visited = new boolean[nodes];
    this.nodes = nodes;

    for (int i=0; i<nodes; i++){
      graph.add(i, new ArrayList<>());
    }
  }
  public void addedge(int a, int b){
    graph.get(a).add(b);
  }

  public boolean ifSourceConnectedToDestination(int source, int destination){

    dfs(source);

    return visited[distination];// we know from this solution that node has path or not
  }
  public void dfs(int start){

    Stack<Integer> stack = new Stack<>();
    stack.push(start);
    visited[start]=true;
    while(!stack.isEmpty()){
      Integer node = stack.pop();

      List<Integer> neighboursList = graph.get(node);

      for(Integer neighbour: neighboursList) {
        if(!visited[neighbour]){
          stack.push(neighbour);
          visited[neighbour] = true;
        }
      }
    }
  }
public void dfsAnother (int start){ //

  visited[start] = true;

  List<Integer> neighbourList = graph.get(start);

  for (Integer neghbour : neighbourList){
    if(!visited[neighbour]){
      dfsAnother(neighbour);
    }
  }
}
}


public class GraphProblems{
  public static void main(String[] args){
    int nodes = 5;

    Graph a = new Graph(nodes);
  }
}
