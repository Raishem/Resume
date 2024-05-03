
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

        const skillslist = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillslist.appendChild(li);
        });

        const educationContainer = document.getElementById('education');
        data.education.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.innerHTML = `
            <h2>${edu.level}<h2>
            <p>${edu.school}<p>
            <p>${edu.address}<p>
            `;
            educationContainer.appendChild(eduDiv);
        });

        const experienceList = document.getElementById('experience');
        data.experience.forEach(exp => {
            const li = document.createElement('li');
            li.innerText = exp;
            experienceList.appendChild(li);
        });

        const awardsList = document.getElementById('awards');
        data.awards.forEach(award => {
            const li = document.createElement('li');
            li.innerText = award;
            awardsList.appendChild(li);
        });

        const referencesList = document.getElementById('references');
        data.references.forEach(reference => {
            li.innerText = reference;
            referencesList.appendChild(li);
        });

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });