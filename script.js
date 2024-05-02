
    fetch('https://resumewebservice.onrender.com/')
    .then (response => response.json())
    .then (data => {
        document.getElementById('level').innerText = data.education.level;
        document.getElementById('school').innerText = data.education.school;
        document.getElementById('year').innerText = data.education.year;
        document.getElementById('schooladdress').innerText = data.education.schooladdress;
        document.getElementById('course').innerText = data.education.course;

        const skills = document.getElementById('skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;

            skills.appendChild(li);
        });

        const experience = document.getElementById('experience');

        data.experienceforEach(exp => {
            const li = document.createElement('li');
            li.innerText = exp;

            experience.appendChild(li);
        });

        document.getElementById('name').innerText=data.personal_info.name;
        document.getElementById('Address').innerText=data.personal_info.Address;
        document.getElementById('ContactNo').innerText=data.personal_info.ContactNo;
        document.getElementById('Email').innerText=data.personal_info.Email;
        document.getElementById('Birthdate').innerText=data.personal_info.Birthdate;
        document.getElementById('Age').innerText=data.personal_info.Age;
        document.getElementById('Gender').innerText=data.personal_info.Gender;
    })
    .catch(error => {
        console.error('Error fetching data:',error);
    });
