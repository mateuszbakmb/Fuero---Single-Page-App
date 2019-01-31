# Fuero Games Single Page App

Full website at https://mateuszbakmb.github.io/Fuero---Single-Page-App/

Project created as a first part of a recruitment process at Fuero Games.

Normally the login would be possible only after entering provided credentials while using fetch and connecting to localhost:5000. <br>
However, for obvious reasons, I commented it out in my github version and logging is possible using any username/password. <br>
In this project I was supposed complete the following tasks:

###Layout should contain 3 views Login, Dashboard, Configuration:

1.	Login view
	The layout of this view is up to you. The only requirement is Login Form
	Login form requirements:
		- Vertically centered
		- Horizontally centered
		- Input for Login and password
		- Login button disabled until inputs are filled
		- Login only works with credentials:
		login: Fuero, password: FrontEndDeveloper!123               
		- If the user provides invalid credentials display a red label on top of Login        form with information about wrong credentials.
(Back end will return HttpResponseCode: 400)
		- If the user provides valid credentials redirect to Dashboard
(Back end will return HttpResponseCode: 200)
Send login data with
POST request
Header: Content-Type: application/json
Payload:
{
	"login" : "xxxx",
	"password" : "xxxx"
}
		- Login credentials are validated by backend on: http://localhost:5000/Login
2.	Dashboard view
	This view requires 3 main elements: Vertical side menu, Header and Main Content Area

	Vertical side menu with 5 items 3 of them collapsible
		- Menu should always stick to the left side of the screen
		- Menu should reserve full height of the screen
		- Menu item is clickable link
		- If item is collapsible it should have an indicator to see if item is collapsed or not.
		Menu items are:
		 -> Dashboard
		 -> Statistics(Collapsible)
			-> Tests
			-> Devices
			-> Builds
			-> Services
			-> Projects
		 -> Reports(Collapsible)
			-> Tests
			-> Devices
			-> Builds
			-> Services
			-> Projects
		 -> Configurations
		 -> Overview(Collapsible)
			-> Tests
			-> Devices
			-> Builds
			-> Services
			-> Projects

		Clicking the links doesn't redirect user to any page. It only displays text in center of Main Content Area with link information such as:
			Dashboard
			Statistics - Devices
			Reports - Projects
			Configurations
			Overview - Tests etc...

	2. 	Header area
		- Header should stick to the top of the page
		- Header should take full width of the page
		- This is the place for action buttons like:
			-> Logout
				Redirect user to Login Page
			-> Configuration
				In Main Content area display Configuration Page
		- In the centre of the header put area for notifications. There should be three types of notifications:
			-> Error (red)
			-> Warning (orange)
			-> Info (blue)
			Notification contains text with type and date of occurrence.
			We need button to dismiss the notification.
			If notification is not dismissed by the user next incoming notification will replace the old one.
			Using custom JavaScript code constantly display random type of notification in this area.
			The time between notifications should be a random number of seconds	between 5-10 seconds.
	3. Main Content area	 
		- Stick to the right of menu and below header
		- Area should reserve all available space left
		- In this area place one window.
		  Allow user to drag window within Main Content area and after releasing mouse button stay in place.
		  User should be able to collapse the window.
		  Collapsed window also has to be draggable.

3.	Configuration view

	This page contains 3 sections each with its own save button
	- Section 1 - Language selection
		List of available languages is here: https://gist.github.com/piraveen/fafd0d984b2236e809d03a0e306c8a4d
		This should be single option select.
		Value displayed in select should be the "name" property of every Language.
		If value of "nativeName" contains any special character this option should be visible but disabled.
		We consider every character different from:
		"A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z"
		as special character.

		If no value is selected the default value id English.

	- Section 2 - Notification types select - multiple choice
		Select with Notification types (Displayed in header area), user can check multiple types.

		If no values are selected Save button is disabled.

	- Section 3 - email input
		This is a text input. This field should have a real time email validation during user input.
		For validation use regex pattern. If input field is not empty and email is not valid Save button should be disabled until user provides
		valid email or deletes the content of the input.
