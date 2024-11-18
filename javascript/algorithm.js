function insertionSort(arr) {
    // Loop through all the elements starting from the second one
    for (let i = 1; i < arr.length; i++) {
      // Store the current element to be inserted
      let currentElement = arr[i];
  
      // Find the correct position for the current element
      let j = i - 1;
      
      // Move elements that are greater than currentElement to one position ahead
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element into its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage
  let arr = [5, 2, 9, 1, 5, 6];
  console.log(insertionSort(arr));  // Output: [1, 2, 5, 5, 6, 9]
  
  