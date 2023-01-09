# Variable
A **variable** is a character string to which we assign a value, and particularly the value is **untyped**. 

Every shell instance(shell process) maintains its own variables. For example, if you create a variable "v" in a shell(called A), then you new a shell window(called B), the "v" is not existed in shell B.

## Declaring Syntax
There are **no whitespaces** around equal sign(=).<br/>
```bash showLineNumbers
v="Hello Shell"     # correct ✅
v= "Hello Shell"    # incorrect ❌
v = "Hello Shell"   # incorrect ❌
v ="Hello Shell"    # incorrect ❌
```

## Naming Rules
A variable name can only be combined with **a-z**, **A-Z**, **0-9** and **underscore(_)**, and it cannot start with numbers.<br/>
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
unset v     # delete "v"
echo $v     # print out empty string("")
```

### identifier


## Variables Types
- **Local variables**
    - They are **scoped only** in a function or a block of code, and it declares with `local` prefix.
    ```bash showLineNumbers
    func(){
      local v="Hello Shell"
      echo $v                # print out "Hello Shell"
    }
    func                     # call the function             
    echo $v                  # print out empty string("")
    ```
    
<br/>

- **Global variables**
    - They are **scoped only** in the shell process where it has been declared.
    ```bash showLineNumbers
    func(){
      global_v="Hello Shell" # declared within a function
    }
    echo $global_v           # print out empty string(""), because it has't declare yet
    func                     # call the function             
    echo $global_v           # print out "Hello Shell"

    global_v2="Hello Shell"  # declared outside a function
    echo $global_v2          # print out "Hello Shell"
    ```
    
<br/>

- **Environment variables**
    - They are **scoped** in the entire shell process and its subprocesses, global variables can become environment variables by exporting.
    - Use ` env ` or ` printenv ` to check whether a variable is the environment variable. 
    ```bash showLineNumbers
    # script1.sh
    v="Hello Shell"
    export v
    
    # in terminal
    ./script1.sh    # execute script1.sh
    env             # Now, v=Hello Shell is in the output
    printenv        # Now, v=Hello Shell is in the output

    # script2.sh
    echo $v         # print out "Hello Shell", because it became an environment variable
    ```

## Reference
1. [shell-scripting-different-types-of-variables](https://www.geeksforgeeks.org/shell-scripting-different-types-of-variables/)
2. [Unix / Linux - Using Shell Variables](https://www.tutorialspoint.com/unix/unix-using-variables.htm)
3. Learning the bash Shell - Unix Shell Programming
4. [How to Use Bash Source Command](https://linuxhint.com/bash_source_example/)
