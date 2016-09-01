# uxdesign-html


Project that fill @amadeuslms[1] with new UI and UX ideas and discussions.


##Frameworks/Libs Used##

* Bootstrap 3.3.7
* font-awesome 4.6.3
* Jquery (a pre-requisite for Material Design Bootstrap)
* Material Design by FezVastra [2]

##Patterns for Folders##

1. Html
	All .html files are stored inside html/app_folder, basically, as we are serving a django project, we think about where this html will be a better fit, example: "auth_user.html" will be on "html/user" because it is best place it can be.

2. CSS
	All .css files that are used for a specific app stay into "css/app", otherwise, they go "css/base" because they are going to be used across many apps.


3. JS
	All .js files that are used for a specific app stay into "js/app", otherwise, they go "js/base" because they are going to be used across many apps.

4. Imgs

	All img (.png, .jpg, etc) files that are used for a specific app stay into "img/app", otherwise, they go "img/base" because they are going to be used across many apps.

5. All other Libs
	All other libs, such as "font-awesome" or "material-design" should be placed on the root of the project so we have a concise vision of all design.



##Languages##
	We use HTML5, CSS3 and Javascript(we don't strictly use ECMAScript 6 or 7) in our files. You are free to contribute and bring new patterns, such as SASS or LESS for CSS. 

* HTML5
* CSS3
* Javascript





##References##
[1] https://github.com/amadeusproject/amadeuslms

[2] https://github.com/FezVrasta/bootstrap-material-design