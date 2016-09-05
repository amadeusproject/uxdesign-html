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


##Naming conventions for Files##

 * For any html file, we use the pattern "generic_specific" pattern, basically, generic could be any of [home, edit, profile] and specific would be [user, student, professor].

 * Files can only contain letters, digits and underscores - no spaces, punctuation or funny caracters

 * Files should always start with a letter.

 * We suggest that you use only lowercase letters thus making it more error-prone.

 * About the images, put names that you remember what's inside of it "tree.png" should be exactly what you're thinking of: an image of a tree, not a car or even  a bunch of trees.


##Commit Patterns##

We set our tasks on the project using the issue system of github, any commit you may add should be addressed to a single ISSUE , example "solving problem #12". Thus making it clear for others what you're trying to solve or add.



##References##
[1] https://github.com/amadeusproject/amadeuslms

[2] https://github.com/FezVrasta/bootstrap-material-design
