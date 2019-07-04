// init github
const github = new Github;

// init ui
const ui = new UI;

const searchInput = document.getElementById('searchProfiles');

// search input event listener
searchInput.addEventListener('keyup', e => {
  const textInput = e.target.value;

  if (textInput !== '') {
    // make http call
    github.getUser(textInput).then(data => {
      if (data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        // show output
        ui.showOutput(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear output
    ui.clearOutput();
  }
});
