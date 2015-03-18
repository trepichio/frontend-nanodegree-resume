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
    ]
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
                "http://placekitten.com/g/50/50",
                "http://placekitten.com/g/50/50"
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
    ]
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
    ]
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

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}

if (work.jobs.length > 0) {
	
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
	}
}
