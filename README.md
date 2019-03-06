# Interactive File Tree Viewer

## To Use

- You'll need to install in both the client and root, but then run the project
  from the root directory as typed out below:

```shell
cd client
npm install
cd ..
npm install
npm start
```

## Preview

<img src="./client/public/Preview.gif">


### About the Process

- I chose to go with create-react-app because I felt that that was the quickest
  way to get the app up and running while also maintaining a good file
  structure.

- While designing layout, I wanted to make the file tree resemble the computer a
  little more closely, so I added two extra folders (the two prior to where the
  output starts).

- Ideally, I would've added tests; however, I ran out of time and pushed tests
  towards the bottom of my triage list.

- In order to help maximize efficiency, I added a utility to cache items in
  local storage.
