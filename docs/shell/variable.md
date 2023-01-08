# Variable
A **variable** in shell instance is a character string to which we assign a value, and the value is **untyped**.

## Syntax
There are **no whitespaces** around equal sign(=).
```bash showLineNumbers
v="Hello Shell"     # correct ✅
v= "Hello Shell"    # incorrect ❌
v = "Hello Shell"   # incorrect ❌
v ="Hello Shell"    # incorrect ❌
```

## Naming Rules
A variable name can only be combined with **a-z**, **A-Z**, **0-9** and **underscore(_)**, and it cannot start with numbers.
```bash showLineNumbers
v="John"      # correct ✅
_v="Grace"    # correct ✅
1v="Tom"      # incorrect ❌
```

## Opertations
### access
To use **dollar sign($)** to access variables.
```bash showLineNumbers
v="Hello Shell"
echo $v     # print out "Hello Shell"
```
### assign
### delete
To use **unset** or set to empty string("") to delete variables
```bash showLineNumbers
v="Hello Shell"
echo $v     # print out "Hello Shell"

unset v    # delete "v"
echo $v     # print out empty string("")
```

### identifier


## Variables Types
- **Local variables**
    - They are **scoped** in a function or a block of code, and it declares with **local** prefix.
    ```bash showLineNumbers
    func(){
      local v="Hello World"
      echo $v                # print out "Hello World"
    }
    func                     # call the function             
    echo $v                  # print out ""(empty string)
    ```
- **Global variables**
    - They are **scoped** in the entire shell script. 

- **Environment variables**
    - They can be accessed throughout 

## Reference
1. [shell-scripting-different-types-of-variables](https://www.geeksforgeeks.org/shell-scripting-different-types-of-variables/)
2. [Unix / Linux - Using Shell Variables](https://www.tutorialspoint.com/unix/unix-using-variables.htm)
3. Learning the bash Shell - Unix Shell Programming