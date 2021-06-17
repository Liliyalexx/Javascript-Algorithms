/**
 * @param {string[]} words
 * @return {string[]}
 */
//Javascript
var stringMatching = function(words) {
  let output =[];
  words.sort((a,b) =>a.length-b.length)

  for(let i=0; i<words.length; i++){
      for(let j=i+1; j<words.length; j++){                 
          if(words[j].includes(words[i])){
              output.push(words[i]);
              break;
          }
      }
  }
  return output;
};

// C#
var stringMatching = function (words) {
return words.filter((word, i) => 
words.slice(0, i).concat(words.slice(i + 1)).some(w => w.includes(word)))
};

// java
const stringMatching = words =>
words.filter(n => words.some(h => h !== n && h.includes(n)));

class Solution {
  public List<String> stringMatching(String[] words) {
      
      if(words==null || words.length==0)
          return new ArrayList<String>();
      
      Set<String> ans = new HashSet();
      
      for(String word:words) {
          for(String word1:words) {
              if(!word.equals(word1) && !ans.contains(word1) && word.indexOf(word1) !=-1) {
                 ans.add(word1);
              }
          }
      }
      
      return new ArrayList(ans);
  }
}
