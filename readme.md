On POSIX systems, for every process, the kernel maintains a table of currently open files and resources. Each open file is assigned a simple numeric identifier called a file descriptor. At the system-level, all file system operations use these file descriptors to identify and track each specific file. Windows systems use a different but conceptually similar mechanism for tracking resources. To simplify things for users, Node.js abstracts away the specific differences between operating systems and assigns all open files a numeric file descriptor.

The fs.open() method is used to allocate a new file descriptor. Once allocated, the file descriptor may be used to read data from, write data to, or request information about the file.

```js
fs.open('app.js', 'r', (err, fd) => {
    if (err) throw err;
    fs.fstat(fd, (err, stat) => {
        if (err) throw err;
        // use stat

        // always close the file descriptor!
        fs.close(fd, (err) => {
            if (err) trow err;
        });
    });
});
```

Reading a File
===

###Synatx
Following is the syntax of one of the methods to read from a file -
```js
fs.read(fd, buffer, offset, length, position, callback)
```

Parameters

Here is the description of the parameters used -
* fd - This is the file descriptor returned by fs.open().
* buffer - This is the buffer that the data will be written to.
* offset - This is the offset in the buffer to start writing at.
* length - This is an integer specifying the number of bytes to read.
* position - This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
* callback - This is the callback function which gets the three arguments, (err, bytesRead, buffer).