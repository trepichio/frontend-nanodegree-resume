$(function(){




    var model = {
        init: function(){
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
			},
            work = {
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
        	},
        	projects = {
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
			    ]
			},    
        	education = {
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

        	if(!localStorage.resume){
        		localStorage.resume = JSON.stringify({
        			"bio": bio,
        			"work": work,
        			"projects": projects,
        			"education": education
        		});
        		console.log(JSON.parse(localStorage.resume));
        	}
        },

        getResume: function(){
        	return JSON.parse(localStorage.resume);
        }//,

     //    getBioFormat: function(){
     //    	var bioFormat = {
     //    		entry: { 
     //    			name: HTMLheaderName,
					// role: HTMLheaderRole
     //    		},
     //    		contacts: {
     //    			email: HTMLemail,
     //    			mobile: HTMLmobile,
     //    			gitHub: HTMLgithub,
     //    			location: HTMLlocation
     //    		},
     //    		skills: 
     //  		};

     //    	return bioFormat; 
     //    }
    };

    var octopus = {
        init: function(){
            model.init();
            view.init();
        },
        
        getBio: function(){
            return model.getResume().bio;
        },

        // getBioDisplay: function(){
        // 	return model.getBioFormat();
        // },

        getEducation: function(){
            return model.getResume().education;
        },

        getProjects: function(){
            return model.getResume().projects;
        },

        getWork: function(){
            return model.getResume().work;
        }
    };

    var view = {
        init: function() {
        	this.header = $('#header');
            this.topContacts = $('#topContacts');
            this.workExperience = $('#workExperience');
            this.projects = $('#projects');
            this.education = $('#education');
            this.mapDiv = $('#mapDiv');
            this.letsConnect = $('#letsConnect');
            this.footerContacts = $('#footerContacts');

            // this.bioTags = octopus.getBioFormat();
            this.bioData = octopus.getBio();
            this.workData = octopus.getWork();
            this.projectsData = octopus.getProjects();
            this.educationData = octopus.getEducation();

            this.main = $("#main");

            this.map;

            $(internationalizeButton)
            	.appendTo(this.main)
            	.click(function() {
				    var iName = view.internationalizeName() || function(){};
				    $('#name').html(iName);  
			  	});

			// Vanilla JS way to listen for resizing of the window
			// and adjust map bounds
			window.addEventListener('resize', function(e) {
			  // Make sure the map bounds get updated on page resize
			  view.map.fitBounds(mapBounds);
			});


			/** @constructor */
				this.CoordMapType = function (tileSize) {
				  this.tileSize = tileSize;
				}

				this.CoordMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
				  var div = ownerDocument.createElement('div');
				  div.innerHTML = coord;
				  div.style.width = this.tileSize.width + 'px';
				  div.style.height = this.tileSize.height + 'px';
				  div.style.fontSize = '10';
				  div.style.borderStyle = 'solid';
				  div.style.borderWidth = '1px';
				  div.style.borderColor = '#AAAAAA';
				  return div;
				};




            view.render();
        },

        display: function(HTMLHelperTag,data,section){

        	var result = HTMLHelperTag.replace("%data%",data);
	    	section.append(result);
        },

        displayBio: function(){
        	var bio = this.bioData;
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
			this.header.prepend(bioEntry);
			this.topContacts.append(bioContacts);
			this.header.append(formattedBioPic + formattedWelcomeMsg);
			if (bio.skills.length > 0) {
				this.header.append(HTMLskillsStart);
				for (skill in bio.skills) {
					var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
					$("#skills").append(formattedSkills);
				}
			this.footerContacts.append(bioContacts);
			}
        },

        displayWork: function(){
        	var work = this.workData;
			if (work.jobs.length > 0) {
				for (job in work.jobs) {
					this.workExperience.append(HTMLworkStart);
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
        },

        displayProjects: function(){
        	var projects = this.projectsData;
        	if (projects.project.length > 0) {
				for (i in projects.project) {
					this.projects.append(HTMLprojectStart);
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
        },

        displayEducation: function(){
        	var education = this.educationData;
        	if (education.schools.length > 0) {
				for (school in education.schools) {
					this.education.append(HTMLschoolStart);
					var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
					var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
					var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
					var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
					var formattedMajors = "";
					if (education.schools[school].majors.length > 0){
						formattedMajors = education.schools[school].majors.join(', ');
						formattedMajors = HTMLschoolMajor.replace("%data%",formattedMajors);
					}
					var formattedEducationEntry = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajors;
					$(".education-entry:last").append(formattedEducationEntry);
				}
			}
			if (education.onlineCourses.length > 0){
				$(".education-entry:last").append(HTMLonlineClasses);
				for (course in education.onlineCourses) {
					var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
					var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
					var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
					var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
					var formattedOnlineEntry = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
					$(".education-entry:last").append(formattedOnlineEntry);
				}
			}
        },

        displayMap: function(){
        	this.mapDiv.append(googleMap);

        	// Calls the initializeMap() function when the page loads
        	this.initializeMap();
        },

        internationalizeName: function(){
        	var finalName = this.bioData.name;
		    // Your code goes here!
		    var fn = finalName.trim().toLowerCase().split(' ');

		    finalName = fn[0].charAt(0).toUpperCase() + fn[0].slice(1) + ' ' + fn[fn.length-1].toUpperCase();

		    // Don't delete this line!
		    return finalName;
        },

		initializeMap: function () {

		  var locations;

		  var mapOptions = {
		    disableDefaultUI: true,
		    mapTypeControl: true,
		    mapTypeControlOptions: {
		      style: google.maps.MapTypeControlStyle.DEFAULT,
		      mapTypeIds: [
		        google.maps.MapTypeId.ROADMAP,
		        google.maps.MapTypeId.HYBRID,
		        google.maps.MapTypeId.SATELLITE,
		        google.maps.MapTypeId.TERRAIN
		      ]
		    },
		  };

		  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
		  // <div id="map">, which is appended as part of an exercise late in the course.
		  view.map = new google.maps.Map(document.querySelector('#map'), mapOptions);

		// Insert this overlay map type as the first overlay map type at
		  // position 0. Note that all overlay map types appear on top of
		  // their parent base map.
		  view.map.overlayMapTypes.insertAt(
		      0, new view.CoordMapType(new google.maps.Size(256, 256)));

		  /*
		  locationFinder() returns an array of every location string from the JSONs
		  written for bio, education, and work.
		  */
		  function locationFinder() {
		    
		    var bio = view.bioData,
		        education = view.educationData,
		        work = view.workData;

		    // initializes an empty array
		    var locations = [];

		    // adds the single location property from bio to the locations array
		    locations.push(bio.contacts.location);

		    // iterates through school locations and appends each location to
		    // the locations array
		    for (var school in education.schools) {
		      locations.push(education.schools[school].location);
		    }

		    // iterates through work locations and appends each location to
		    // the locations array
		    for (var job in work.jobs) {
		      locations.push(work.jobs[job].location);
		    }

		    return locations;
		  }

		  /*
		  createMapMarker(placeData) reads Google Places search results to create map pins.
		  placeData is the object returned from search results containing information
		  about a single location.
		  */
		  function createMapMarker(placeData) {
		    // The next lines save location data from the search result object to local variables
		    var lat = placeData.geometry.location.lat();  // latitude from the place service
		    var lon = placeData.geometry.location.lng();  // longitude from the place service
		    var name = placeData.formatted_address;   // name of the place from the place service
		    var bounds = window.mapBounds;            // current boundaries of the map window

		    // marker is an object with additional data about the pin for a single location
		    var marker = new google.maps.Marker({
		      map: view.map,
		      position: placeData.geometry.location,
		      title: name
		    });

		    // infoWindows are the little helper windows that open when you click
		    // or hover over a pin on a map. They usually contain more information
		    // about a location.
		    var infoWindow = new google.maps.InfoWindow({
		      content: name
		    });
		    var chooseMapTypeIds = [
		        google.maps.MapTypeId.ROADMAP,
		        google.maps.MapTypeId.HYBRID,
		        google.maps.MapTypeId.SATELLITE,
		        google.maps.MapTypeId.TERRAIN
		      ];

		    function mapOption(){
		        view.map.setMapTypeId(chooseMapTypeIds[i]);
		        i++;
		        if (i > 3){
		          i = 0;
		        }
		    }
		    var i = 0;
		    // hmmmm, I wonder what this is about...
		    google.maps.event.addListener(marker, 'click', function() {
		      // your code goes here!
		      infoWindow.setContent(name);
		      infoWindow.open(view.map, this);
		      switch (i){
		        case 0:
		              mapOption();
		              break;
		        case 1:
		              mapOption();
		              break;
		        case 2:
		              mapOption();
		              break;
		        case 3:
		              mapOption();
		              break;
		      }
		    });

		    // this is where the pin actually gets added to the map.
		    // bounds.extend() takes in a map location object
		    bounds.extend(new google.maps.LatLng(lat, lon));
		    // fit the map to the new marker
		    view.map.fitBounds(bounds);
		    // center the map
		    view.map.setCenter(bounds.getCenter());
		  }

		  /*
		  callback(results, status) makes sure the search returned results for a location.
		  If so, it creates a new map marker for that location.
		  */
		  function callback(results, status) {
		    if (status == google.maps.places.PlacesServiceStatus.OK) {
		      createMapMarker(results[0]);
		    }
		  }

		  /*
		  pinPoster(locations) takes in the array of locations created by locationFinder()
		  and fires off Google place searches for each location
		  */
		  function pinPoster(locations) {
		    // creates a Google place search service object. PlacesService does the work of
		    // actually searching for location data.
		    var service = new google.maps.places.PlacesService(view.map);

		    // Iterates through the array of locations, creates a search object for each location
		    for (var place in locations) {

		      // the search request object
		      var request = {
		        query: locations[place]
		      };

		      // Actually searches the Google Maps API for location data and runs the callback
		      // function with the search results after each search.
		      service.textSearch(request, callback);
		    }
		  }

		  // Sets the boundaries of the map based on pin locations
		  window.mapBounds = new google.maps.LatLngBounds();

		  // locations is an array of location strings returned from locationFinder()
		  locations = locationFinder();

		  // pinPoster(locations) creates pins on the map for each location in
		  // the locations array
		  pinPoster(locations);
		},

        render: function() {
        	view.displayBio();
        	view.displayWork();
        	view.displayProjects();
        	view.displayEducation();
        	view.displayMap();
	    }
    };

    octopus.init();

}());
