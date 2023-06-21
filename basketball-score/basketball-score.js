let buckets = [ "fg", "tp", "ft", "ft", "tp", "tp", "tp", "fg", "fg", "tp", "fg", "tp", "ft", "ft", "ft", "tp" ]

// Write code here
let buckets = [ "fg", "fg", "ft", "tp" ]


let sum = 0;
for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] == "fg"){
      sum = sum + 2
} else if (buckets[i] == "ft"){
        sum += 1
} else if (buckets[i] == "tp"){
        sum += 3
  }
}
console.log(sum)
