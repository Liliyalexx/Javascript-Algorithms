Flood Fill 
Leetcode 733:
class Solution {
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {

        int oldcolor = image[sr][sc];
        if(oldcolor == newColor) return image;
        helper(image,sr,sc,oldcolor,newColor);
        return image;
    }
    private void helper(int[][]  image,int sr,int sc, int oldcolor, int newColor){

        if(sr> image.length-1  sr < 0  sc > image[0].length-1 || sc < 0) return;
        if(image[sr][sc]== oldcolor) 
            image[sr][sc]= newColor;
        else return;

        int[][] dirs = {{0,1},{1,0},{-1,0},{0,-1}};

        for(int [] dir : dirs){
            int i= sr+dir[0];
            int j= sc+dir[1];
            helper(image,i,j,oldcolor, newColor);
        }

    }
}