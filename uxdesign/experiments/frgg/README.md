# frgg

This experiment is a try to improve the code modularization by using @santojon/Frgg[1]

## Frameworks/Libs Used

* Bootstrap 3.3.7
* font-awesome 4.6.3
* Jquery (a pre-requisite for Material Design Bootstrap)
* Material Design by FezVastra [2]

## Patterns for Folders

1. html: 
	All .html files are stored inside html/app_folder, basically, as we are serving a django project, we think about where this html will be a better fit, example: "auth_user.html" will be on "html/user" because it is best place it can be.

2. css: 
	All .css files that are used for a specific app stay into "css/app", otherwise, they go "css/base" because they are going to be used across many apps.

3. js: 
	All .js files that are used for a specific app stay into "js/app", otherwise, they go "js/base" because they are going to be used across many apps.

4. img: 
	All img (.png, .jpg, etc) files that are used for a specific app stay into "img/app", otherwise, they go "img/base" because they are going to be used across many apps.

5. All other Libs: 
	All other libs, such as "font-awesome" or "material-design" should be placed on the root of the project so we have a concise vision of all design.

## Naming conventions for Files

 * For any html file, we use the pattern "generic_specific" pattern, basically, generic could be any of [home, edit, profile] and specific would be [user, student, professor].

 * Files can only contain letters, digits and underscores - no spaces, punctuation or funny caracters

 * Files should always start with a letter.

 * We suggest that you use only lowercase letters thus making it more error-prone.

 * About the images, put names that you remember what's inside of it "tree.png" should be exactly what you're thinking of: an image of a tree, not a car or even  a bunch of trees.


##References##
[1] https://github.com/santojon/Frgg

[2] https://github.com/FezVrasta/bootstrap-material-design
