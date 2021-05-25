class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> count = new HashMap<Character, Integer>();
        int n = s.length();
        for (int i = 0; i < n; i++) {

            char c = s.charAt(i);
            count.put(c, count.getOrDefault(c, 0) + 1);
        }

        for (int i = 0; i < n; i++) {

            if (count.get(s.charAt(i)) == 1)
                return i;

        }
        return -1;
    }

}

    ///
boolean isUniqueChars(String str){
    if (str.length > 128) return false;
    boolean[] char_set = new boolean[128];
    for(int i=0; i<str.length(); i++){
        int val  = str.charAt(i);
        if(char_set[val]){
            return false;
        }
        char_set[val]=true;

    }
    return true;

}
