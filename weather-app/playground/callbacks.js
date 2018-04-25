// Call-back function example

/**
 * First argument is id, second we are going to get a call-back
 * function-this is what we are going to call later with the data, with
 * that user object.
 */
let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Vikram'
  };
  setTimeout(() => { // Pass arrow function as first argument
    // Call call-back passing in the user object as an argument
    callback(user);
  }, 3000); // Set delay to 3000 milliseconds or 3 seconds
};

/**
 * Call getUser with first argument as some id.
 * The second argument is the function we want to run when
 * the user data comes back
 */
getUser(31, (userObject) => { // We going to expect that the user object comes back as an argument to getUser function
  console.log(userObject); // Display user object on screen
});
