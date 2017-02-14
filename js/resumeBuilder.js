/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Abhinav");

 // var firstName = "James";
 // var age = 32;
 // console.log(firstName)

 // var email = "abhinav@utexas.edu";
 // var newEmail = email.replace("utexas","gatech");

 // var awesomeThoughts = "I am Abhinav and I am awesome";

 // var funThoughts = awesomeThoughts.replace("awesome","fun");

 // $("#main").append(funThoughts);

 // console.log(email)
 // console.log(newEmail)
 // console.log(HTMLheaderName)

 var name = "Abhinav Malhotra";
 var role = "Web and App Development";
 var email = "abhinav@utexas.edu";
 // var picUrl = "file:///Users/abhinav/Downloads/abhinav_fp.jpg";
 // var picUrl = "images/Abhinav.jpg"
 var picUrl ="images/Abhinav.jpg";
 var welcomeMsg = "Hello! Welcome to my online resume!";
 var skills = ["Java", "Python", "C", "Android", "Django"];


// <a href="https://github.com/abhinavmal">abhinavmal</a>'

 var bio = {
 	"name" : name,
 	"role" : role,
 	"contacts" : {
 		"email" : email,
 		"mobile" :  "+1-512-698-7396",
 		"github" : 'abhinavmal',
 		"blog" : "www.abhinavmalhotra.in",
 		"location" : "Austin, TX"
 	},
 	"picUrl" : picUrl,
 	"welcomeMsg" : welcomeMsg,
 	"skills" : skills
 }

 var work = {};
 work.jobs = [
 	{
 		"employer" : "Texas Advanced Computing Center (TACC), UT Austin",
 		"title" : "Graduate Research Assistant",
 		"dates" : "May 2015 - May 2016",
 		"location" : "Austin, TX",
 		"description" : "Developed the web interface of ARLO - a machine learning system that helps search content \
 						in audio tracks, without listening to them\n Developed the search \
 						algorithm for audio files, based on (convolutional) template matching \
 						technique"
 	},
 	{
 		"employer" : "Aspiring Minds (India)",
 		"title" : "Associate - Instrument Design and Research",
 		"dates" : "July 2013 - July 2014",
 		"location" : "Delhi, India",
 		"description" : "Designed and developed test instrument/interfaces for semi-literate test \
						takers that helps blue-collared candidates find skill-based jobs"

 	},
 	{
 		"employer" : "Texas Instruments (India)",
 		"title" : "Design Engineer",
 		"dates" : "July 2011 – June 2013",
 		"location" : "Bangalore, India",
 		"description" : "Developed work-flows in PERL for transistor \
 						level parasitic extraction of Digital IPs (Core Cells, Memory Blocks)  \
 						at 90nm"

 	}
 ]


 var education = {};

 education.schools = [
 	{
 		"name" : "The University of Texas at Austin",
 		"degree" : "Master of Science",
 		"location" : "Austin, TX",
 		"majors" : ["Software Engineering (GPA: 3.67)"],
 		"dates" : "Aug 2014 - May 2016",
 		"url" : "https://www.utexas.edu"
 	},
 	{
 		"name" : "University of Delhi, NSIT",
 		"degree" : "Bachelor of Engineering",
 		"location" : "Delhi, India",
 		"majors" : ["Electronics Engineering ( 85.50%, Gold Medalist )"],
 		"dates" : "Aug 2007- Jun 2011",
 		"url" : "http://nsit.ac.in"

 	}
 ]

 education.onlineCourses = [
	    {
	    	"title" : "Full-Stack Web Developer",
	    	"school" : "Udacity",
	    	"dates" : "December 2016",
	    	"url" : "www.udacity.com"

 		}

 ]

 var projects = {
 	"projects" :  [
		 	{
		 		"title" :  "Pet-Social Android App",
		 		"dates" : "Nov 2015 – Dec 2015",
		 		"description" : "Developed an android app that helps the user find a friend/activity \
								partner for his/her pet\n  \
								Integrated the Facebook API to identify users and the Google Places \
								API to tag activity locations for a pet",
		 		"image" : "",
		 		"link" : "https://www.youtube.com/watch?v=sGyyXz0-lwc",
		 	},
		 	{
		 		"title" : "Connexus PhotoSharing WebApp",
		 		"dates" : "Aug 2015 – Sep 2015",
		 		"description" : "Developed a website (full-stack, Google App Engine) that allows users to create  \
		 						 photo albums with their Gmail account and explore other public photo albums. \n \
		 						 Link: http://www.abhi-1085.appspot.com",
		 		"image" : "",
		 		"link" : "http://www.abhi-1085.appspot.com",
		 	},
		 	{
		 		"title" :  "Fashion Design with Genetic Algorithms",
		 		"dates" :  "Dec 2008 – Jul 2009",
		 		"description" : "Developed an interactive evolutionary system, that generated clothing designs,  \
		 						got user feedback and attempted to create new designs as per liking of the user.",
		 		"image" : "",
		 		"link" : "http://dl.acm.org/citation.cfm?id=2001980&dl=ACM&coll=DL&CFID=728007261&CFTOKEN=56320692",
		 	},
		 	{
		 		"title" : "Responsive Multi-User Blog",
		 		"dates" : "Jan 2017 - Feb 2017",
		 		"description" : "Developed a responsive website (full-stack, Google App Engine) \
		 						 that allows users to create blog entries, comment on/like/dislike other’s posts. \
		 						 Customized design to ensure efficient view on mobile devices. ",
		 		"image" : "",
		 		"link" : "https://mu-blog-5551.appspot.com/",
		 	}
 	],
 	"display" : function() {
 					projects.projects.forEach(function(element) {
 						$("#projects").append(HTMLprojectStart);

 						var formattedTitle2 = HTMLprojectTitle.replace("%data%",element.title);
 						formattedTitle2 = formattedTitle2.replace("%projectlink%", element.link);
						var formatedDates = HTMLprojectDates.replace("%data%",element.dates);
						var formattedDescription = HTMLprojectDescription.replace("%data%",element.description);
						var formattedImg = HTMLprojectImage.replace("%data%",element.image);

						$(".project-entry:last").append(formattedTitle2);
						$(".project-entry:last").append(formatedDates);
						$(".project-entry:last").append(formattedDescription);
						$(".project-entry:last").append(formattedImg);

 					});
 				}
}

 //var contact = "See more:"

 var formattedName = HTMLheaderName.replace('%data%', name);
 console.log(formattedName)


 var formattedRole = HTMLheaderRole.replace('%data%', role);
 var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
 var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
 var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
 var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
 var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
 //var formattedContact = HTMLcontactGeneric.replace('%data%', contact).replace('%contact%',"Contact");
 var formattedPicUrl = HTMLbioPic.replace('%data%', picUrl);
 var formattedWelMsg = HTMLwelcomeMsg.replace('%data%', welcomeMsg);
 // var formattedSkills = HTMLskills.replace('%data%', skills);


$("#header").prepend(formattedWelMsg);
$("#header").prepend(formattedPicUrl);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedBlog);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills ) {
		var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}

}


function displayWork() {

	for (jobIdx in work.jobs) {

			$("#workExperience").append(HTMLworkStart);


			console.log(document.getElementsByClassName("work-entry").length);
			var formattedWorkEmp = HTMLworkEmployer.replace('%data%',work.jobs[jobIdx].employer);
			var formattedWorkEmpTitle = HTMLworkTitle.replace('%data%',work.jobs[jobIdx].title);

			var formattedDates = HTMLworkDates.replace('%data%',work.jobs[jobIdx].dates);
			var formattedLoc = HTMLworkLocation.replace('%data%',work.jobs[jobIdx].location);
			var formattedDescrip = HTMLworkDescription.replace('%data%',work.jobs[jobIdx].description);



			console.log(formattedWorkEmp+formattedWorkEmpTitle);
			$(".work-entry:last").append(formattedWorkEmp+formattedWorkEmpTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLoc);
			$(".work-entry:last").append(formattedDescrip);
	}

}

displayWork();

projects.display();


// Display Education

function displayEducation() {

	for (schoolIdx in education.schools) {

			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[schoolIdx].name);
			formattedSchoolName = formattedSchoolName.replace('%schoollink%', education.schools[schoolIdx].url);
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[schoolIdx].degree);

			var formattedDates = HTMLschoolDates.replace('%data%', education.schools[schoolIdx].dates);
			var formattedLoc = HTMLschoolLocation.replace('%data%', education.schools[schoolIdx].location);
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[schoolIdx].majors);

			$(".education-entry:last").append(formattedSchoolName+formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLoc);
			$(".education-entry:last").append(formattedMajor);
	}

}

displayEducation();




// Collecting click locations for the page
$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});


//$("#main").append(internationalizeButton);

function inName(){
	var names = bio.name.split(" ");
	var firstName = names[0].toLowerCase();
	var firstLetter = firstName[0].toUpperCase();
	firstName = firstLetter + firstName.slice(1);
	var lastName = names[1].toUpperCase();

	return (firstName + " " + lastName);
}

$("#mapDiv").append(googleMap);

 // $("#header").prepend(formattedSkills);
 // $("#header").prepend(HTMLskillsStart);
 // $("#header").prepend(formattedWelMsg);
 // $("#header").prepend(formattedPicUrl);
 // $("#header").prepend(formattedLocation);
 // $("#header").prepend(formattedBlog);
 // $("#header").prepend(formattedGithub);
 // $("#header").prepend(formattedMobile);
 // $("#header").prepend(formattedEmail);
 // $("#header").prepend(formattedRole);
 // $("#header").prepend(formattedName);





