`#js` `#dom` `#assembler-institute` `#master-in-software-engineering`

### The repo

You only need to clone the repository:

```bash
$ git clone https://github.com/assembler-school/js-shopping-wizard.git
```

### Dependencies

This project is created with Vanilla JS so you don't need to import any dependency.

## 1. Introduction

In this project you must develop a shopping process form with steps, where each step will have its own validation.

### What are the main objectives in this project?

- Improve your knowledge of <b>JavaScript</b>
- Learn to work with the <b>HTML DOM.</b>
- Learn and improve your knowledge in logic processes
- Learn to <b>validate forms</b> using <b>Javascript</b>.

## 2. General analysis

The form will contain several steps that will need to be hidden and show others in order to move along the steps.This means there will be just one HTML page and the content will be changed dynamically.

## 3. Develop a form

The objective of this pill is to develop an <b>HTML form</b> with <b>custom CSS</b> styles and <b>JS validation. After each phase (screen) change your team roles</b> and work on the part your team member was previously coding, this way all of you can have a general understing for each phase. To develop the form you must take into account the following fields and their own validations:

- <b>Phase 1: Product</b>

  - This is the first content to be displayed in HTML
  - The app will have image miniatures. When the user hovers the picture, in the main product image region, the image will be displayed in a larger size.
  - Here you must create two options. These options can be color or product size such as XS, S, M, L, XL t-shirt sizes. Depending on the user choice, the price and the images will change.

- <b>Phase 2: Step 1 - Profile</b>
  - Username
    - Set the <b>specific input type</b> for text
      - Text without spaces
    - Required
    - Minlength: 5
    - Max. length: 20
  - Email
    - Set the <b>specific input type</b> for email
    - Required
    - Max. length: 50
  - Password
    - Set the <b>specific input type</b> for password
    - Required
    - <b>The text must contain at least</b>:
      - One number
      - One uppercase letter
      - One lowercase letter
      - One special character
    - Min. length: 8
    - Max. length: 20
  - Confirm password
    - Must be the same that the previous password
- <b>Phase 3: Step 2 - Address</b>
  - First name
    - Set the specific input type for text
    - Required
    - Max. length: 20
  - Last name
    - Set the specific input type for text
    - Required
    - Max. length: 20
  - Birthday
    - Set the specific input type for dates
    - Required
  - Address 1
    - Set the specific input type for text
    - Required
    - Max. length: 50
  - Address 2
    - Set the specific input type for text
    - Max. length: 50
  - Postal code
    - Set the <b>specific input type</b> for numbers
    - Required
    - Max: 5 digits
  - Country
    - Set the specific HTML element for selects
    - Required
    - <b>This field sets the default phone country codes</b> (the next option) that <b>matches</b> the user <b>selected option</b>.
  - List of countries:
    - Andorra
    - España
    - Francia
    - Alemania
    - Grecia
  - Phone country code
    - Set the specific HTML element for selects
    - Required
    - Although in the previous option puts default a value in this select, you can change the value whenever you want.
    - List of countries codes:
    - 376 - AND
    - 34 - ESP
    - 33 - FRA
    - 49 - DEU
    - 30 - GRC
  - Phone
    - Set the specific input type for telephone numbers
    - Required
    - The input can contain only numeric values
    - Max: 9 digits
  - This is my regular address
    - Input type checkbox
- <b>Phase 4: Step 3 - Shipping</b>
  - Shipping types (required)
  - Radio button
  - Required
  - Options:
    - Free shipment (72H) ( no extra cost )
    - Extra shipping (48h) ( +5 € )
    - Premium (24h) ( + 10€ )
  - Shipping date info
    - This information will appear when you choose the shipping option-
    - The shipping date will show the shipping time depending on the previous option between a range of two dates.
      - Date 1 (minimum date):
        - This label will show today's date + 24h,48h or 72h.
        - 21/04/2020 09:00 + 24h = <b>22/04/2020 09:00</b>
      - Date 2 (maximum date):
        - “Date 1“ + 24 margin hours
        - 22/04/2020 09:00 + 24h = <b>23/04/2020 09:00</b>
  - Gift wrap
  - Input type checkbox
  - Optional
  - If you select this option it will automatically appear:
    - Input title
    - Input message (textarea [max 200])
    - Input file (accept="image/png, image/jpeg")
- <b>Phase 5: Step 4 - Finish</b>
  - Terms and conditions (checkbox)
  - Required
  - The finish button will remain disabled until you select the checkbox
  - Product details
  - Shipping date details
  - Final price
  - The time it took the user to finish the registration since the first part (step 1)

## 3.1 Form requirements

Below are the general requirements that the form should have:

- Each step page will contain a “next” and a “clear form” button.
  - The “next” button will link to the next step.
  - The information of the form will be saved in memory, the main purpose of this pill is to learn to work with HTML, CSS and JS together with the part of validation done in Javascript.
  - The “reset” button will reset all the input values in the current step introduced by the user to the default ones.
  - Step 4 will contain a “finish” button instead “next” that will link to the “thank you” page.
  - In this page there will be a link to start the form again.
- All the JS validation messages will be displayed in the screen below the respective input in a paragraph with the custom message.
  - This element must be loaded in the HTML using Javascript.
  - You will need to apply custom styles to the inputs that have not passed the validation to apply some error. styling, such as the letter or container being shown in red
- For every minute that the user remains in the purchase process (step 1, step2, step 3 and step 4), a message must be shown on the screen that must be hidden 5 seconds after it appears.
- The purchase process will have a time limit of 5 minutes (start in step 1), if it is not completed in this period of time (the process is completed by reaching the thank you page), a message should appear on the screen indicating that the maximum time allowed for the purchase process has been exceeded and will automatically redirect you to the product screen in 5 seconds (the first screen)
- When you reach the Thank You page you will show all the values that are specified in the documentation (shipping, purchase time, ...) and then you will have to reset all the information that you have stored in this process (time, price, …)

## 3.2 Wireframes

The structure of the form that you will implement should be like the wireframes shown below:

<u><b>Main Page - Product</b></u>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/1_1201.png' type='image' width="500" height="auto"></a>

<u><b>Step 1 - Profile</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/2_1880.png' type='image' width="500" height="auto"></a>

<u><b>Validation Examples</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/3_1177.png' type='image' width="500" height="auto"></a>

<u><b>Step 2 - Address</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/4_841.png' type='image' width="500" height="auto"></a>

<u><b>Step 3 - Shipping</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/5_677.png' type='image' width="500" height="auto"></a>

<u><b>Step 3 - Shipping - Premium</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/6_438.png' type='image' width="500" height="auto"></a>

<u><b>Step 4 - Finish</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/7_309.png' type='image' width="500" height="auto"></a>

### <u><b>Thank you page</u></b>

<a href='https://www.linkpicture.com/view.php?img=LPic6241da6e1e7ea1058506713'><img src='https://www.linkpicture.com/q/8_264.png' type='image' width="500" height="auto"></a>

## 4. Requirements

- You will have to implement the entire application using a single HTML file
- All the processes must be carried out without reloading the page
- You cannot use cookies, localStorage or any similar technologies
- You cannot use third-party libraries

## 5.Extras 💯

Once you have implemented the main features of the application you should implement the following extra requirements (that are not specified in any particular order) as a challenge for yourself and your team. However, you can also consider them during the development of the pill if you would like to implement any of them from the beginning, such as the design requirements or the browser compatibility.

<b>It is easier to develop a feature from the beginning than to modify it later.</b>

### 5.1 Browser compatibility

You should check that everything is compatible with other current browsers, and, as an extra step.

### 5.2 Input validation

All the input validation should be done after users have entered a value, this means that you should only validate the value in the input fields after a value has been entered and not before users interact with the inputs.

- The validation should be done when the input field loses focus, that is, users type a value, they change focus to another element, then the field validation runs.
- After a validation message is entered and users focus the input element to adjust the value, the validation message and any error styles should be removed until the user has entered a new value and the focus is lost from the input field as before.

### 5.3 Design

The design of the application should be different to the wireframe look we provide.

### 5.4 Remove event listeners

All the event listeners that were attached to the elements in the other containers such as modals should be removed to avoid memory leaks.

### 5.5 Responsive design

All the screens and steps should be responsive <b>using flexbox or grid</b> so that they can be used in any device size.

### 5.6 Accessibility

You should use semantic HTML elements for all the app such as buttons and HTML5 sectioning elements (main, section, nav, etc)

## 6. Deliverables

To evaluate the project you will need the following deliverables:

- Project repository with:
  - A presentation in Google Slides explaining:
  - Explain what lessons you’ve learned during this project
  - What problems have you encountered when developing this project?
  - Explain how you changed roles to develop the project for each phase (screen)

## 7. Resources

- [JS DOM](https://www.w3schools.com/js/js_htmldom_methods.asp)
- [Event Prevent Default](https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)

## 8. License <!-- omit in toc -->

- [MIT](https://choosealicense.com/licenses/mit/)
