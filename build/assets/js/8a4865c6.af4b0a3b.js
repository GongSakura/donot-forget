"use strict";(self.webpackChunkDonotForget=self.webpackChunkDonotForget||[]).push([[5465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="1. Variable",s={unversionedId:"shell/variable",id:"shell/variable",title:"1. Variable",description:"A variable is a character string to which we assign a value, and particularly the value is untyped by default. Every shell instance(shell process) maintains its variables.",source:"@site/docs/shell/variable.md",sourceDirName:"shell",slug:"/shell/variable",permalink:"/docs/shell/variable",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/shell/variable.md",tags:[],version:"current",frontMatter:{},sidebar:"DEVOPS",previous:{title:"0. Introduction",permalink:"/docs/shell/introduction"},next:{title:"0. Introduction",permalink:"/docs/docker/introduction"}},o={},p=[{value:"Declaring Syntax",id:"declaring-syntax",level:2},{value:"Naming Rules",id:"naming-rules",level:2},{value:"Operations",id:"operations",level:2},{value:"Access",id:"access",level:3},{value:"Assign",id:"assign",level:3},{value:"Delete",id:"delete",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Variable Scopes",id:"variable-scopes",level:2},{value:"Reference",id:"reference",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-variable"},"1. Variable"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"variable")," is a character string to which we assign a value, and particularly the value is ",(0,r.kt)("strong",{parentName:"p"},"untyped")," by default. Every shell instance(shell process) maintains its variables. "),(0,r.kt)("p",null,'For example, in a shell window "A", if you create a variable "v", then in another shell window "B" (another shell process), the "v" does not exist.'),(0,r.kt)("h2",{id:"declaring-syntax"},"Declaring Syntax"),(0,r.kt)("p",null,"There are ",(0,r.kt)("strong",{parentName:"p"},"no whitespaces")," around the ",(0,r.kt)("strong",{parentName:"p"},"equal sign")," ",(0,r.kt)("inlineCode",{parentName:"p"},"="),".",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v="Hello Shell"     # correct \u2705\nv= "Hello Shell"    # incorrect \u274c\nv = "Hello Shell"   # incorrect \u274c\nv ="Hello Shell"    # incorrect \u274c\n')),(0,r.kt)("h2",{id:"naming-rules"},"Naming Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only consist of ",(0,r.kt)("strong",{parentName:"li"},"a-z"),", ",(0,r.kt)("strong",{parentName:"li"},"A-Z"),", ",(0,r.kt)("strong",{parentName:"li"},"0-9")," and ",(0,r.kt)("strong",{parentName:"li"},"underscore(_)")," "),(0,r.kt)("li",{parentName:"ul"},"Can't start with numbers"),(0,r.kt)("li",{parentName:"ul"},"Case sensitive"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Snake Case")," is a good choice"),(0,r.kt)("li",{parentName:"ul"},"In convention, environment variables use uppercase letters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v="John"               # correct \u2705\n_v="Grace"             # correct \u2705\nHOME_PATH="/usr/bin"   # correct \u2705\n1v="Tom"               # incorrect \u274c\n')),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("h3",{id:"access"},"Access"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"dollar sign")," ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," to access variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v="Hello Shell"\necho $v       # print: "Hello Shell"\n')),(0,r.kt)("p",null,"A more general way is to use ",(0,r.kt)("strong",{parentName:"p"},"curly braces")," ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," to wrap the variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v="Hello Shell"\necho ${v}    # print: "Hello Shell"\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"assign"},"Assign"),(0,r.kt)("p",null,"To assign plain text, simply use the ",(0,r.kt)("strong",{parentName:"p"},"double quote"),", or without quotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v="Hi, do not forget!"\nv1=Hi\nv2="99"\nv3=123   # the value of v3 is not an integer\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"To assign a numeric value, we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v=2*3       # without  prefix\nlet v1=2*3  \n\necho $v     # print: "2*3"\necho $v1    # print: "6"\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"Sometimes, to assign ",(0,r.kt)("strong",{parentName:"p"},"the output")," of a function or a command, we need to use the mechanism called ",(0,r.kt)("strong",{parentName:"p"},"command substitution")," with syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"$(<command> <args>)")," or use the backward quote ",(0,r.kt)("inlineCode",{parentName:"p"},"`<command> <args>`")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'func(){\n  if [[ $1 == 1 ]]\n    then\n      echo "the first parameter is == 1"\n    else\n      echo "the first parameter is != 1"\n  fi\n}\n\nv=$(func "1")\necho $v   # print: the first parameter is == 1\n\nv=`func "2"`\necho $v  # print: the first parameter is != 1\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"unset"),' or assign empty string(""), to delete variables.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'v="Hello Shell"\nunset v           # delete "v"\necho $v           # print: null("")\n\nv1="Hello Delete"\nv1=""             # not recommended, it\'s unclear in semantics\n')),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"declare")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"typeset")," to add attributes to a variable, different attributes have different usages."),(0,r.kt)("p",null,"Some commonly used attributes are shown as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"declare -p <variable_name>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Print out all attributes of the variable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"declare -r <variable_name>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Make the variable ",(0,r.kt)("strong",{parentName:"td"},"readonly"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"declare -x <variable_name>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Set the variable as a ",(0,r.kt)("strong",{parentName:"td"},"environment variable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"declare -u <variable_name>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Set the value to ",(0,r.kt)("strong",{parentName:"td"},"UPPERCASE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"declare -l <variable_name>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Set the value to ",(0,r.kt)("strong",{parentName:"td"},"lowercase"),".")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"remove attributes"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'declare -r v=readonly!\ndeclare -p v    # print: "typeset -r v=readonly!"\n\ndeclare +r v    # remove readonly attribute\ndeclare -p v    # print: "typeset v=readonly!"\n')),(0,r.kt)("h2",{id:"variable-scopes"},"Variable Scopes"),(0,r.kt)("p",null,"Different types of variables have different scopes(contexts), there are three kinds of scopes:\n",(0,r.kt)("strong",{parentName:"p"},"local"),", ",(0,r.kt)("strong",{parentName:"p"},"global"),", and ",(0,r.kt)("strong",{parentName:"p"},"environment"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In a subprocess(subshell), variables are ",(0,r.kt)("strong",{parentName:"p"},"only scoped locally"),", meaning no matter what kinds of variables are declared in the subprocess, they are unaccessible and invisible to its main process(parent process),  the in subprocess.")),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Local variables"),(0,r.kt)("br",null),"\nThey are ",(0,r.kt)("strong",{parentName:"p"},"scoped only")," in a function or a block of code, and it declares with the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," prefix."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'  func(){\n    local v="Hello Shell"\n    echo $v               \n  }\n\n  func      # call the function, print: "Hello Shell"             \n  echo $v   # access outside the function, print: null("")\n')))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Global variables"),(0,r.kt)("br",null),"\nThey are ",(0,r.kt)("strong",{parentName:"p"},"scoped only")," in a process. They can be declared anywhere, and accessed anywhere within the process."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'  v="I\'m v"         # declare outside a function\n  func(){\n    v2="I\'m v2"     # declare inside a function\n    echo $v         # access inside a function\n  }\n\n  func              # call the function, print: "I\'m v"     \n  echo $v2          # print: "I\'m v2"\n')))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Environment variables"),(0,r.kt)("br",null),"\nThey are ",(0,r.kt)("strong",{parentName:"p"},"scoped")," in both the main process and subprocesses. Any variable can be declared as a environment variable by a prefix: ",(0,r.kt)("inlineCode",{parentName:"p"},"export"),"."),(0,r.kt)("p",{parentName:"li"},"Use command ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"printenv")," to check all environment variables."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'  # script1.sh\n  v="Hello Shell"\n  export v\n\n  # script2.sh\n  echo $v               # print: "Hello Shell"\n  \n  # in terminal\n  source script1.sh     # execute script1.sh in current process\n  env                   # now, "v=Hello Shell" is in the output\n  printenv              # now, "v=Hello Shell" is in the output\n  sh script2.sh         # execute script2.sh in subprocess, print: "v=Hello Shell"\n')))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Learning the bash Shell, 3rd Edition"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/shell-scripting-different-types-of-variables/"},"shell-scripting-different-types-of-variables")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/unix/unix-using-variables.htm"},"Unix / Linux - Using Shell Variables")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://linuxhint.com/bash_source_example/"},"How to Use Bash Source Command")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://tldp.org/LDP/abs/html/subshells.html"},"Advanced Bash-Scripting Guide. Chapter21: subshells")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.baeldung.com/linux/bash-single-vs-double-brackets"},"https://www.baeldung.com/linux/bash-single-vs-double-brackets"))))}u.isMDXComponent=!0}}]);