
    fetch('https://resumewebservice.onrender.com/')
    .then (response => response.json())
    .then (data => {
        
        document.getElementById('name').innerText = data.personal_info.name;
        document.getElementById('address').innerText = "Address: " + data.personal_info.address;
        document.getElementById('contactno').innerText = "Contact Number: " + data.personal_info.contactno;
        document.getElementById('email').innerText = "Email Address: " + data.personal_info.email;
        document.getElementById('birthdate').innerText = "Birthdate: " + data.personal_info.birthdate;
        document.getElementById('age').innerText = "Age: " + data.personal_info.age;
        document.getElementById('gender').innerText = "Gender: " + data.personal_info.gender;

        document.getElementById('about_me').innerText = data.about_me;

        document.getElementById('job').innerText = data.job;


        const awardslist = document.getElementById('awards');
        data.awards.forEach(award => {
            const li = document.createElement('li');
            li.innerText = award;
            awardslist.appendChild(li);
        });

        const skillslist = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillslist.appendChild(li);
        });

        const educationContainer = document.getElementById('education');
data.education.forEach(edu => {
    const eduItem = document.createElement('li');
    eduItem.classList.add('education-item');
    eduItem.innerHTML = `
        <div class="level">
            <h2>${edu.level}</h2>
        </div>
        <div class="details">
            <p>${edu.school}</p>
            <p>${edu.schooladdress}</p>
            <p>${edu.year}</p>
        </div>
    `;
    educationContainer.appendChild(eduItem);
});
        

        const experienceList = document.getElementById('experience');
        data.experience.forEach(experience => {
            const li = document.createElement('li');
            li.innerText = experience;
            experienceList.appendChild(li);
        });
        
        const referencesContainer = document.getElementById('references');
        data.references.forEach(references => {
            references.classList.add('references-item');
    references.innerHTML = `
        <div class="namee">
            <h2>${references.namee}</h2>
        </div>
        <div class="details">
            <p>${references.contactnum}</p>
            <p>${references.work}</p>
        </div>
    `;
    referencesContainer.appendChild(references);
});
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });