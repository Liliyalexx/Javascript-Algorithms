public class StringSegmentation {

  public static boolean canSegmentString(String s, Set <String> dictionary) {
    for (int i = 1; i <= s.length(); ++i) {
      String first = s.substring(0, i);
      if (dictionary.contains(first)) {
        String second = s.substring(i);

        if (second == null || second.length() == 0 || dictionary.contains(second) || canSegmentString(second, dictionary)) {
          return true;
        }

      }
    }
    return false;
  }

  public static void main(String[] args) {
    Set < String > dictionary = new HashSet < String > ();
    String s = new String();
    s = "hellonow";

    dictionary.add("hello");
    dictionary.add("hell");
    dictionary.add("on");
    dictionary.add("now");
    if (canSegmentString(s, dictionary)) {
      System.out.println("String Can be Segmented");
    } else {
      System.out.println("String Can NOT be Segmented");
    }
  }
}class String_Segmentation {
  
}

//434. Number of Segments in a String


class Solution{

  public int countSegments(String s){
      int segments = 0;
      for (int i =0; i< s.length(); i++){
         if(( i == 0 || s.charAt(i-1) == ' ') && s.charAt(i)!=' ') {
                        segments++;
         }
      }
      return segments;
  }
      
  }
