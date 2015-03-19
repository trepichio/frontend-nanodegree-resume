var work = {
    "jobs": [
        {
            "employer": "TOTVS VALE DO PARAÍBA",
            "title": "CONSULTOR ECM/BPM",
            "location": "São José dos Campos, SP, BR",
            "dates": "jul/2012-oct/2013",
            "description": [
                "Consultor ECM/BPM ",
                "Certificado HCT da própria TOTVS;",
                "Foco de atendimento: Vale do Paraíba;",
                "Apoio à área Comercial realizando ",
                "demonstrações em clientes e levantamentos",
                " de requisitos.",
                "Atuação no projeto ECM internamente na ",
                "TOTVS VALE DO PARAÍBA, auxiliando na busca,",
                " localização e controle das documentações",
                " MIT, e das Propostas Comerciais,",
                " e no desenvolvimento de workflows",
                " e da intranet para exibição online",
                " das agendas dos Consultores da unidade."
            ]
        },
        {
            "employer": "BRAVA (TOTVS PARTNER)",
            "title": "CONSULTOR ECM/BPM",
            "location": "São Paulo, SP, BR",
            "dates": "Mar-Nov/2011",
            "description": [
                "Obtenção do Certificado",
                " HCT da própria TOTVS;",
                "Implantação do ambiente, ",
                "Levantamento de Engenharia de Processos",
                " de Negócios, Capacitação Básica/Avançada",
                " de GED e BPM – Workflow para ",
                "Usuários-Chaves e Desenvolvedores, ",
                "Desenvolvimento/Customização de Formulários",
                " e Processos Workflow no sistema",
                " ByYou ECM da TOTVS.",
                "Atendimento em todos os estados do Brasil.",
                "Clientes como Industria Brasileira",
                " de Filmes (IBF), Gomes da Costa, Magis, ",
                " Souza Cruz, Alusa, Nexans, Delp,",
                " SUD Chemie, KPMG, etc."
            ]
        }
    ],
    "display" : function(){
		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
				var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
				var jobDescription = work.jobs[job].description.join('');
				var formattedDescription = HTMLworkDescription.replace("%data%",jobDescription);
				var formattedWorkEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
				$(".work-entry:last").append(formattedWorkEntry);
			}
		}
    }
};

var projects = {
    "project": [
        {
            "title": "front-end resume",
            "dates": "March/2015",
            "description": [
                "This is a project for the ",
                "Udacity course 'Javascript Basics'"
            ],
            "images": [
                "http://placekitten.com/g/150/300",
                "http://placekitten.com/g/140/200"
            ]
        },
        {
            "title": " Collaborative Create-Your-Own-Adventure",
            "dates": "March/2015",
            "description": [
                "This is a create-your-own-adventure ",
                "story where at each step,",
                "the reader chooses what action to take and turns to ",
                "an appropriate page of the story based on ",
                "their choice. It is collaborative because ",
                "it is written one small piece at a time by ",
                "many authors."
            ],
            "images": [
                "http://placekitten.com/g/200/300"
            ]
        }
    ],
    "display" : function(){
    	if (projects.project.length > 0) {
			for (i in projects.project) {
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
				var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
				var projectDescription = projects.project[i].description;
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projectDescription.join(''));
				var formattedProjectImage = "";
				if (projects.project[i].images.length > 0){
					for (j in projects.project[i].images) {
						formattedProjectImage += HTMLprojectImage.replace("%data%",projects.project[i].images[j]);
					}
				}
				var formattedProjectEntry = formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImage;
				$(".project-entry:last").append(formattedProjectEntry);
			}
		}
    }
};

var bio = {
    "name": "João Eduardo Átala Trepíchio",
    "role": "Web Developer",
    "contacts": {
        "mobile": "12-99633-4885",
        "email": "trepichio@gmail.com",
        "gitHub": "trepichio",
        "twitter": "@trepichio",
        "location": "São José dos Campos, SP, Brazil"
    },
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "Lorem ipsum dolor sit amet, modi.",
    "skills": [
        "JS",
        "jQuery",
        "CSS",
        "HTML"
    ],
    "display" : function () {
    	var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.gitHub);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		var bioEntry = formattedName + formattedRole;
		var bioContacts = formattedEmail + formattedMobile + formattedGitHub +
		formattedLocation;
		$("#header").prepend(bioEntry);
		$("#topContacts").append(bioContacts);
		$("#header").append(formattedBioPic + formattedWelcomeMsg);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills) {
				var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var education = {
    "schools": [
        {
            "name": "UNISAL",
            "location": "Lorena, SP, BR",
            "degree": "BA",
            "majors": [
                "CompSci",
                "English"
            ],
            "minors": [
                "PNL"
            ],
            "dates": "2003-2007"
        },
        {
            "name": "Colégio Drummond",
            "location": "Lorena, SP, BR",
            "degree": "HS",
            "majors": [
                "Math",
                "Portuguese",
                "Chemestry",
                "Physics"
            ],
            "minors": [
                "History",
                "Geography"
            ],
            "dates": "1999-2002"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "March 2015",
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "How to use Git and GitHub",
            "school": "Udacity",
            "dates": "March 2015",
            "url": "https://www.udacity.com/course/ud775"
        }
    ]
};


$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();


function inName(){
	var finalName = bio.name;
    // Your code goes here!
    var fn = finalName.trim().toLowerCase().split(' ');

    finalName = fn[0].charAt(0).toUpperCase() + fn[0].slice(1) + ' ' + fn[fn.length-1].toUpperCase();


    // Don't delete this line!
    return finalName;
}


