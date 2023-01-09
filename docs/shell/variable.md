# Variable
A **variable** is a character string to which we assign a value, and particularly the value is **untyped** by default. 

Every shell instance(shell process) maintains its own variables. For example, if you create a variable "v" in a shell(called A), then you new a shell window(called B), the "v" is not existed in shell B.

## Declaring Syntax
There are **no whitespaces** around the **equal sign** `=`.<br/>
```bash showLineNumbers
v="Hello Shell"     # correct ✅
v= "Hello Shell"    # incorrect ❌
v = "Hello Shell"   # incorrect ❌
v ="Hello Shell"    # incorrect ❌
```

## Naming Rules
A valid name only consists of **a-z**, **A-Z**, **0-9** and **underscore(_)**, and it cannot start with numbers.<br/>
```bash showLineNumbers
v="John"      # correct ✅
_v="Grace"    # correct ✅
1v="Tom"      # incorrect ❌
```

## Opertations
### access
Use **dollar sign** `$` to access variables.
```bash showLineNumbers
v="Hello Shell"
echo $v       # print: "Hello Shell"
```


A more general style is to use **curly braces** `{}` to wrap the variable.

```bash showLineNumbers
v="Hello Shell"
echo ${v}    # print: "Hello Shell"
```


single quote vs 
### assign
TODO

### delete
Use `unset` or assign empty string("") to delete variables
```bash showLineNumbers
v="Hello Shell"
echo $v     # print out "Hello Shell"
unset v     # delete "v"
echo $v     # print out empty string("")
```

### attributes


## Variables Types
- **Local variables**<br/>
They are **scoped only** in a function or a block of code, and it declares with `local` prefix.<br/><br/>
    ```bash showLineNumbers
    func(){
      local v="Hello Shell"
      echo $v               
    }
    
    func                     # call the function, print: "Hello Shell"             
    echo $v                  # access outside the function, print: empty string("")
    ```
    
<br/>

- **Global variables**<br/>
They are **scoped only** in a process of current shell, and they can be declared anywhere.<br/><br/>
    ```bash showLineNumbers
    v="I'm v"         # declare a global variable outside a function
    func(){
      v2="I'm v2"     # declare a global variable inside a function
      echo $v         # access inside a function
    }
   
    func              # call the function, print: "I'm v"             
    echo $v2          # print: "I'm v2"
    ```

<br/>

- **Environment variables**<br/>
    - They are **scoped** in both the main process and subprocesses of the current shell, global variables can become environment variables by exporting.
    - Use ` env ` or ` printenv ` commands to check whether a variable is the environment variable. <br/><br/>
    ```bash showLineNumbers
    # script1.sh
    v="Hello Shell"
    export v
    
    # in terminal
    source script1.sh       # execute script1.sh in main process
    env                     # Now, "v=Hello Shell" is in the output
    printenv                # Now, "v=Hello Shell" is in the output

    # script2.sh
    echo $v                 # print out "Hello Shell", because it's a environment variable, and visible
    
    # in terminal
    sh script2.sh           # execute script2.sh in subprocess, print out "v=Hello Shell"
    ```

## Reference
1. Learning the bash Shell - Unix Shell Programming
2. [shell-scripting-different-types-of-variables](https://www.geeksforgeeks.org/shell-scripting-different-types-of-variables/)
3. [Unix / Linux - Using Shell Variables](https://www.tutorialspoint.com/unix/unix-using-variables.htm)
4. [How to Use Bash Source Command](https://linuxhint.com/bash_source_example/)
