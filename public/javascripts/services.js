// Show an object on the screen.
function showObject(obj) {
  const pre = document.getElementById('response');
  const preParent = pre.parentElement;
  pre.innerText = JSON.stringify(obj, null, 4);
  preParent.classList.add('flashing');
  setTimeout(() => preParent.classList.remove('flashing'), 300);
}

// Axios responses have a lot of data. This shows only the most relevant data.
function showResponse(axiosResponse) {
  const fullResponse = axiosResponse.response === undefined
    ? axiosResponse
    : axiosResponse.response;
  const abridgedResponse = {
    data: fullResponse.data,
    status: fullResponse.status,
    statusText: fullResponse.statusText,
  };
  showObject(abridgedResponse);
}

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

/**
 * You can use axios to make API calls like this:
 * const body = { bar: 'baz' };
 * axios.post('/api/foo', body)
 *   .then(showResponse) // on success (Status Code 200)
 *   .catch(showResponse); // on failure (Other Status Code)
 * See https://github.com/axios/axios for more info
 */

function addOne(fields) {
  axios.post('/api/shorts', fields)
    .then(showResponse)
    .catch(showResponse);
}

function listAll(fields) {
  axios.get('/api/shorts', fields)
    .then(showResponse)
    .catch(showResponse);
}

function showAllUsers(fields) {
  axios.get('/api/users', fields)
    .then(showResponse)
    .catch(showResponse);
}

function updateOne(fields) {
  axios.put('/api/shorts/' + fields.name, fields)
    .then(showResponse)
    .catch(showResponse);
}

function deleteOne(fields) {
  axios.delete('/api/shorts/' + fields.name, fields)
    .then(showResponse)
    .catch(showResponse);
}

function signIn(fields) {
  axios.post('/api/users/session', fields)
    .then(showResponse)
    .catch(showResponse);
}

function signOut(fields) {
  axios.delete('/api/users/session', fields)
    .then(showResponse)
    .catch(showResponse)
}

function signUp(fields) {
  axios.post('/api/users', fields)
    .then(showResponse)
    .catch(showResponse)
}

// map form (by id) to the function that should be called on submit
const formsAndHandlers = {
  'add-one': addOne,
  'list-all': listAll,
  'show-all-users': showAllUsers,
  'update-one': updateOne,
  'delete-one': deleteOne,
  'sign-in': signIn,
  'sign-out': signOut,
  'sign-up': signUp,
};

// attach handlers to forms
function init() {
  Object.entries(formsAndHandlers).forEach(([formID, handler]) => {
    const form = document.getElementById(formID);
    form.onsubmit = (e) => {
      e.preventDefault();
      const data = {};
      (new FormData(form)).forEach((value, key) => {
        data[key] = value;
      });
      handler(data);
      return false; // don't reload page
    };
  });
}

window.onload = init; // attach handlers once DOM is ready
