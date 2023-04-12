const rightMiniDiv = document.querySelector('.right-mini');
  const addMiniBtn = document.querySelector('.add-mini-btn');
  const deleteMiniBtn = document.querySelector('.delete-mini-btn');
  let projMinis = []; // an array to store all the proj-mini divs

  addMiniBtn.addEventListener('click', () => {
    // create a new proj-mini div and append it to the right-mini div
    const newProjMini = document.createElement('div');
    newProjMini.classList.add('proj-mini');
    newProjMini.innerHTML = `
      <div class="proj-name">
        <span class="label">Project Name: </span>
        <span class="text">Click the button to add a name</span>
        <button class="edit-btn">Edit</button>
        <div class="input-wrapper">
          <input type="text" class="input-field" placeholder="Enter project name">
          <button class="save-btn">Save</button>
        </div>
      </div>
      <div class="proj-desc">
      <!-- contents of proj-desc div -->
      <span class="label-2">Project Description: </span>
      <span class="text-2">Click the button to give desc</span>
      <button class="edit-btn-2">Edit</button>
      <div class="input-wrapper-2">
        <input type="text-2" class="input-field-2" placeholder="Enter project name">
        <button class="save-btn-2">Save</button>
      </div>
      <!--end contents of proj-desc div-->
      </div>
      <hr>
    `;
    rightMiniDiv.appendChild(newProjMini);
    projMinis.push(newProjMini); // add the new proj-mini to the projMinis array

    // add event listeners to the new proj-mini div's edit and save buttons
    const editBtn = newProjMini.querySelector('.edit-btn');
    const inputWrapper = newProjMini.querySelector('.input-wrapper');
    const inputField = newProjMini.querySelector('.input-field');
    const projNameText = newProjMini.querySelector('.proj-name .text');
    const saveBtn = newProjMini.querySelector('.save-btn');

    editBtn.addEventListener('click', () => {
      projNameText.style.display = 'none'; // hide the original text
      inputWrapper.style.display = 'inline-block'; // show the input field
    });

    saveBtn.addEventListener('click', () => {
      const projectName = inputField.value;
      projNameText.textContent = projectName; // set the text content of proj-name div
      inputWrapper.style.display = 'none'; // hide the input field
      projNameText.style.display = 'inline-block'; // show the new text
    });
    //repeat for 2nd set
    //add event listeners for set 2
    const editBtn2 = newProjMini.querySelector('.edit-btn-2');
    const inputWrapper2 = newProjMini.querySelector('.input-wrapper-2');
    const inputField2 = newProjMini.querySelector('.input-field-2');
    const projDescText = newProjMini.querySelector('.proj-desc .text-2');
    const saveBtn2 = newProjMini.querySelector('.save-btn-2');


    editBtn2.addEventListener('click', () => {
        projDescText.style.display = 'none'; // hide the original text
        inputWrapper2.style.display = 'inline-block'; // show the input field
      });
      saveBtn2.addEventListener('click', () => {
        const projectDesc = inputField2.value;
        projDescText.textContent = projectDesc; // set the text content of proj-name div
        inputWrapper2.style.display = 'none'; // hide the input field
        projDescText.style.display = 'inline-block'; // show the new text
      });
      
  });

  deleteMiniBtn.addEventListener('click', () => {
    if (projMinis.length > 0) {
      const latestProjMini = projMinis.pop(); // remove the last proj-mini from the projMinis array
      latestProjMini.remove(); // remove the latest proj-mini from the DOM
    }
  });