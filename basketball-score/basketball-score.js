let buckets = [ "fg", "tp", "ft", "ft", "tp", "tp", "tp", "fg", "fg", "tp", "fg", "tp", "ft", "ft", "ft", "tp" ]

// Write code here
let buckets = [ "fg", "fg", "ft", "tp" ]
let fg = "2"
    console.log(fg)
let ft = "1"
    console.log(ft)
let tp = "3"
    console.log(tp)
console.log(buckets)

let sum = 0;
for (let i = 0; i < buckets.length; i++) {
  sum += buckets[i]
}
console.log(sum)
