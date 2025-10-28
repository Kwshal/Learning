# Terminal commands:
     - pwd: print working directory
     - cd: change directory
     - ls: list directory
     - ..: go to parent directory
direct jumping to a branch is not possible. so first go to the parent directory and then go to the branch directory.

     - clear: clear the terminal screen
     - touch: create a file

     - echo:
          - print a message /
          - write to a file /
          - create and write to the file it does not exist
          Example: echo "hello world" > hello.txt
            - redirect ">" write into (overrides data)
            - append ">>" append to (keeps data)

     - mkdir: create a directory
     - rm: remove a file
     - rmdir: remove a directory (if it is empty)
     - rm -r: remove a directory (if it is not empty; recursively)
     - cat <file>: print the contents of a file
          - cat "hello" >> file1: prints and appends "hello" to file1
          - cat file1 file2: concatenate the contents of two files