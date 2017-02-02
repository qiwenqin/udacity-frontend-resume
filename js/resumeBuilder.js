/*
This is empty on purpose! Your code to build the resume will go here.
//  */
var data = '%data%';
var bio = {
    "name": "jack qi",
    "role": "Front-end developer",
    "contacts": {
        "mobile": "15801152316",
        "email": "15801152316@163.com",
        "twitter": "@qiwenqin",
        "github": "none",
        "blog": "www.qiwenqin.com",
        "location": "beijing"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "Hello to my resume",
    "skills": ["awesomeness", "english", "JS", "Python"]
};
bio.display = function() {
    var formattedRole = HTMLheaderName.replace(data, bio.name);
    var formattedName = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole, formattedName);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedBlog, formattedLocation)
    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedPic, formattedMsg, HTMLskillsStart);
    if (bio.skills.length > 0) {
        bio.skills.forEach(function(skill) {
            var formattedskills = HTMLskills.replace(data, skill);
            $("#skills").append(formattedskills);
        });
    }
}
bio.display();
// // function inName(name){
// //   name = name.trim().split("");
// //   console.log(name);
// //   name[1] = name[1].toUpperCase();
// //   name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
// //   return name[0]+""+name[1]
// // };
// // $("#main").append(internationalizeButton);
var work = {
    "jobs": [{
            "employer": "baik",
            "title": "stuff",
            "location": "beijing airport",
            "dates": "0.5",
            "description": "an awful job"
        },
        {
            "employer": "rongcheng huishou network",
            "title": "CEO",
            "location": "rongcheng,shandong",
            "dates": "0.6",
            "description": "startup"
        }
    ]
};
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        var formattedDates = HTMLworkDates.replace(data, job.dates);
        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedEmployerTitle + formattedLocation + formattedDates + formattedDescription);
    });
};
work.display();

var projects = {
    "projects": [{
            "title": "CEO",
            "dates": "0.6",
            "description": "a try in managing",
            "images": ["images/project1.jpg", "images/project2.jpg"]
        },
        {
            "title": "intern",
            "dates": "0.6",
            "description": "deal with catering problem",
            "images": ["images/project4.jpg", "images/project5.jpg"]
        }
    ]
};
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, project.title);
        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace(data, image);
                $(".project-entry:last").append(formattedImage);
            })
        }
    })
};
projects.display();

var education = {
    "schools": [{
            "name": "Harbin science and technology university",
            "location": "rongcheng",
            "degree": "BA",
            "majors": ["civil engineering", "english", "CAD"],
            "dates": "2012-08~2016-06",
            "url": "www.hustrc.cn"
        },
        {
            "name": "Daqing oilfiled senior high",
            "location": "Daqing",
            "degree": "senior high",
            "majors": ["math", "chemstry", "english"],
            "dates": "2009-08~2012-06",
            "url": "www.dqsy.com.cn"
        }
    ],
    "onlineCourses": [{
            "title": "Front-end developer",
            "school": "Udacity",
            "dates": "2016-09~2017-09",
            "url": "www.udacity.com"
        },
        {
            "title": "python in analyst",
            "school": "Udemy",
            "dates": "2016-12~2017-12",
            "url": "www.udemy.com"
        }
    ]
};
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(data, school.name);
        var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
        var formattedUrl = HTMLschoolName.replace('<a href="#">%data%', school.url);
        var formattedDates = HTMLschoolDates.replace(data, school.dates);
        var formattedLocation = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last").append(formattedName + formattedDegree + formattedUrl + formattedUrl + formattedDates + formattedLocation);
        if (school.majors.length > 0) {
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace(data, major);
                $(".education-entry:last").append(formattedMajor);
            });
        }
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace(data, onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace(data, onlineCourse.school);
        var formattedDates = HTMLonlineDates.replace(data, onlineCourse.dates);
        var formattedURL = HTMLonlineURL.replace(data, onlineCourse.url);
        $(".education-entry:last").append(formattedTitle + formattedSchool + formattedURL + formattedDates);
    });
};
education.display();

$("#mapDiv").append(googleMap);
