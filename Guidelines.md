# Build an Interactive File Tree Viewer using JavaScript

## Description

Using the dataset provided (output.json), build an interactive file-tree widget
using React.

## Feature Requirements

We want to be able to support really large JSON files, so do not import the entire
JSON file directly. Instead, when a user clicks on a folder, you should send a request
to the server, which sends back the contents of that folder. You can then render the
contents.

Apart from that server communication, we expect the file tree to behave just like a
normal file tree:

- Opening a folder should expand it, and show folders and files inside that folder.
- Opening a folder should append the folder name to the URL. This is similar to how
  the file system works on your computer. /:folder1/:folder2/
- Closing a folder should collapse it. The URL should update by removing that folder
  name from the URL (Again, similar to how the file system path works).
- Clicking on a file should update the URL with the file path
  (Ex: `/:folder1/:folder2/file1.png`).

It’s up to you how you want to architect the file tree, but we encourage you to use
either React or Vanilla JavaScript.

In addition to these requirements, you can add other features which you think would be
helpful and show off your skills. Ideas include search, filtering, CSS design, and more.

## What we are looking for

We’ll be looking at code quality, general code architecture, and overall usability of
the widget.

## Submission Guidelines

Submit a zip file which has your JavaScript project inside it. You should have an `index.html`
which we can open to see the widget.

We will try running your project in the following way:

```shell
npm install
node server.js
```

If we need to do anything different for the setup, let us know in the README.md. Optionally,
if it is easier for you, you can point us to a URL. In the case of URL, the code should still
be submitted via zip file.
