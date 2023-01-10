# Variable
A **variable** is a character string to which we assign a value, and particularly the value is **untyped** by default. 

Every shell instance(shell process) maintains its own variables. For example, if you create a variable "v" in a shell A, then you new a shell window B (created another shell process), the "v" is not existed in shell B.

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
### Access
Use **dollar sign** `$` to access variables.
```bash showLineNumbers
v="Hello Shell"
echo $v       # print: "Hello Shell"
```

A more general way is to use **curly braces** `{}` to wrap the variable.

```bash showLineNumbers
v="Hello Shell"
echo ${v}    # print: "Hello Shell"
```

<br/>

### Assign
Assign plain text simply using **double quote**, or without quote.
```bash showLineNumbers
v="Hi, do not forget!"
v1=Hi
v2="99"
v3=123   # the value of v3 is not an integer
```

</br>

If we would like to assign a numeric value, we need to add the `let` prefix.
```bash showLineNumbers
v=2*3       # without  prefix
let v1=2*3  

echo $v     # print: "2*3"
echo $v1    # print: "6"
```

</br>

Sometimes, we would like to assign the output of a function, or a command, we need to use a mechanism called **command substitution** with the syntax such as `$(<command> <args>)` or using backward quote `` `<command> <args>` ``.
```bash showLineNumbers
func(){
  if [[ $1 == 1 ]]
    then
      echo "the first parameter is == 1"
    else
      echo "the first parameter is != 1"
  fi
}

v=$(func "1")
echo $v   # print: the first parameter is == 1

v=`func "2"`
echo $v  # print: the first parameter is != 1
```

### Delete
Use `unset` or assign empty string(""), to delete variables.
```bash showLineNumbers
v="Hello Shell"
unset v     # delete "v"
echo $v     # print: null("")
```

### Attributes


## Variables scopes
Different types of variables have different scopes(contexts), there are three kind of scopes:
**local**, **global**, and **environment**.

Noted, variables **local** to a subprocess(subshell), it means no matter what kinds of variables delcared in the subprocess, they are unaccessible and invisible to its main process(parent process), **scoped only** in subprocess.

- **Local variables**<br/>
They are **scoped only** in a function or a block of code, and it declares with `local` prefix.

  ```bash showLineNumbers
    func(){
      local v="Hello Shell"
      echo $v               
    }

    func      # call the function, print: "Hello Shell"             
    echo $v   # access outside the function, print: null("")
  ```
    
<br/>

- **Global variables**<br/>
They are **scoped only** in a process. They can be declared anywhere, and accessed anywhere within the process.

  ```bash showLineNumbers
    v="I'm v"         # declare outside a function
    func(){
      v2="I'm v2"     # declare inside a function
      echo $v         # access inside a function
    }

    func              # call the function, print: "I'm v"     
    echo $v2          # print: "I'm v2"
  ```

<br/>

- **Environment variables**<br/>
  They are **scoped** in both the main process and subprocesses, variables can be declared as environment variables by adding `export` prefix.

  Use ` env ` or ` printenv ` commands to check whether a variable is the environment variable.
    ```bash showLineNumbers
      # script1.sh
      v="Hello Shell"
      export v
      
      # in terminal
      source script1.sh     # execute script1.sh in current process
      env                   # now, "v=Hello Shell" is in the output
      printenv              # now, "v=Hello Shell" is in the output

      # script2.sh
      echo $v               # print: "Hello Shell"
      
      # in terminal
      sh script2.sh         # execute script2.sh in subprocess, print: "v=Hello Shell"
    ```

## Reference
1. Learning the bash Shell, 3rd Edition
2. [shell-scripting-different-types-of-variables](https://www.geeksforgeeks.org/shell-scripting-different-types-of-variables/)
3. [Unix / Linux - Using Shell Variables](https://www.tutorialspoint.com/unix/unix-using-variables.htm)
4. [How to Use Bash Source Command](https://linuxhint.com/bash_source_example/)
5. [Advanced Bash-Scripting Guide. Chapter21: subshells](https://tldp.org/LDP/abs/html/subshells.html)
6. https://www.baeldung.com/linux/bash-single-vs-double-brackets
