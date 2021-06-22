// "Mr%20John%20Smith", 13
// Output: "Mr%20John%20Smith"

public class URLify {
  static void replaceSpace(char[] str, int trueLength) {
    int spaceCount = 0, index, i = 0;
    for (i = 0; i < trueLength; i++) {
      if (str[i] == ' ') {
        spaceCount++;
      }
    }
    index = trueLength + spaceCount * 2; // %20
    if (trueLength < str.length) {
      str[trueLength] = '\0';// extra space will be removed, will be not calculated
    }
    for (i = trueLength - 1; i >= 0; i--) {
      if (str[i] == ' ') {
        str[index - 1] = '0';
        str[index - 2] = '2';
        str[index - 3] = '%';
        index = index - 3;
      } else {
        str[index - 1] = str[i];
        index--;
      }
    }

  }

  public static void main(String[] args) {
    String str = "Hi this is Pawan";
    replaceSpace(str.toCharArray(), str.trim().length());
  }
}
