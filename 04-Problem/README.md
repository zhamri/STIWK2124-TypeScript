## What's the problem?

1. "10" is a string, not a number.
1. JavaScript convert the string "10" to a number, so 10 * 2 works.
1. But what if the string was "ten"?

## This runs with no errors, but gives:
```aiignore
Total: NaN
```
