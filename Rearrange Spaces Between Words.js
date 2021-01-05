/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
  const words = text.trim().split(' ').filter((words) => word.length);
  let totalSpaces = 0;
  for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ')
          totalSpaces++;
  }
  const spaceLength = words.length === 1 ? -1 : Math.floor(totalSpaces/(words.length-1)),
        extraSpaceLength = words.length === 1 ? totalSpaces : totalSpaces % (words.length-1);
  
  let spaces = '';
  for (let i = 0; i < spaceLength; i++)
      spaces += ' ';
  
  let extra = '';
  for (let i = 0; i < extraSpaceLength; i++)
      extra += ' '
  
  return words.join(spaces) + extra;
};


// 
var reorderSpaces = function(text) {
  let arr = text.split(" ");
  let totalSpace = arr.length-1;
  arr = arr.filter(w => w !== '');
  let spaceBetween = arr.length > 1 ? 
                  Math.floor(totalSpace / (arr.length-1)) : 0;
  let spaceLeftOver = arr.length > 1 ?
                  totalSpace % (arr.length-1) : totalSpace;
  return (arr.join(" ".repeat(spaceBetween)) + " ".repeat(spaceLeftOver));
  // Time Complexity: O(n)
  // Space Complexity: O(n)
};