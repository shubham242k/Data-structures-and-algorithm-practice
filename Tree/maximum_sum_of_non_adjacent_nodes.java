class GFG
{
    class Node{
    int data;
    Node left, right;
    
        Node(int data)
        {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }


   public static class Pair{
       int first;
       int second;
       Pair(int f,int s){
           this.first = f;
           this.second = s;
       }
   }
   
   
   public static Pair helper(Node node){
       if(node == null){
           return new Pair(0,0);
       }
       
       Pair suml = helper(node.left);
       Pair sumr = helper(node.right);
       
       Pair sum = new Pair(0,0);
       
       sum.first = suml.second + sumr.second + node.data;
       
       sum.second = Math.max(suml.first,suml.second) + Math.max(sumr.first,sumr.second);
       
       return sum;
       
   }
    static int getMaxSum(Node node)
    {
        // add your code here
        Pair p = helper(node);
        return Math.max(p.first,p.second);
     
    }
    
}