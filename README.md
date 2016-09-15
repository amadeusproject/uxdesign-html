# uxdesign-html   
Project that fill @amadeuslms[1] with new UI and UX ideas and discussions.

## Frameworks/Libs Used

* Bootstrap 3.3.7
* font-awesome 4.6.3
* Jquery (a pre-requisite for Material Design Bootstrap)
* Material Design by FezVastra [2]
* w3data [3]

## Patterns for Folders

1. html: All .html files are stored inside html/screens/app_folder, basically, as we are serving a django project, we think about where this html will be a better fit, example: "auth_user.html" will be on "html/screens/user" because it is best place it can be.   
	- 1.1. components: fine grained component html. One file for each component.   
		- 1.1.1. base: UI base components (navbar, breadcrumbs...).   
		- 1.1.2. cards: card views related with content. To be used to compose pages.   
		- 1.1.3. contextual: cards related with dynamic actions and things that need attention (displayed in rigth side).   
		- 1.1.4. menus: left-side menus (almost static content) that have recurrent actions for each page.   
   
	- 1.2. screens: the final screens composed using components.   
   
	- 1.3. templates: page templates to use as base for new pages creation.   

2. assets: The assest folder, with all non-html things.   
	- 2.1. css: All .css files that are used.   
		- 2.1.1. vendor: all external css libs used into project.   
   
	- 2.2. fonts: the font files used in the system.   
   
	- 2.3. img: all image files that are used.   
		- 2.3.1. icons: all custom icons used in the project.   
		- 2.3.2. images: all images used as asset (like photos or graphics and charts).   
		- 2.3.3. logos: logo images.   
   	
	- 2.4. js: All .js files that are used.   
		- 2.4.1. vendor: all external js libs used into project.   

## Languages   
We use HTML5, CSS3 and Javascript in our files. You are free to contribute and bring new patterns, such as SASS or LESS for CSS. 

* HTML5
* CSS3
* Javascript

## Naming conventions for Files

 * For any html file, we use the pattern "generic_specific" pattern, basically, generic could be any of [home, edit, profile] and specific would be [user, student, professor].

 * Files can only contain letters, digits and underscores - no spaces, punctuation or funny caracters

 * Files should always start with a letter.

 * We suggest that you use only lowercase letters thus making it more error-prone.

 * About the images, put names that you remember what's inside of it "tree.png" should be exactly what you're thinking of: an image of a tree, not a car or even  a bunch of trees.


## Commit Patterns   
We set our tasks on the project using the issue system of github, any commit you may add should be addressed to a single ISSUE , example "solving problem #12". Thus making it clear for others what you're trying to solve or add.

## References
[1] https://github.com/amadeusproject/amadeuslms

[2] https://github.com/FezVrasta/bootstrap-material-design

[3] http://www.w3schools.com/howto/howto_html_include.asp