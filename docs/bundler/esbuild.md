
# Esbuild

## plugins
resolve -> load -> start -> end -> dispose
you can have many plugins to process "load", but it will stop executing when a registered plugin have return {content,loader}  