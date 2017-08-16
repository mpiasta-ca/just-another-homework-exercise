# Just Another Homework Exercise

This is a code sample to demonstrate my programming skills. It was requested during an interview as a homework exercise. 

![Screenshot of the running demo](https://raw.githubusercontent.com/mpiasta-ca/just-another-homework-exercise/master/screenshot.png "Screenshot of the running demo")

### Criteria

The exercise had to meet the following criteria:

* Implement HTML/CSS/JavaScript using a front-end framework of your choosing to match a provided Sketch mock-up (note: that mock-up is not included with this package).

* Should be able to toggle "Threads" individually.

* Should be able to toggle all "Threads" by clicking the "Show All Threads" button.

* "Error messages" (that appear in the "stack trace" of a "Thread") which include a "Code sample" should be expandable (the "Code sample" can displayed as an image or as text that is styled using HTML/CSS). 

### Execution

The build took 10 hours from planning to finish of the homework exercise. 

Some of the complexity I encountered:

* **Planning:** I investigated available starter packages on GitHub that might help me save time. I wanted to try a newer framework like React or VueJS, but upon investigation, there would be too large of a learning curve (where I was instructed to only spend 1-2 hours on this exercise). Also, I didn't see the learning approach as feasible, since I had to complete the exercise before an interview the next day. I wanted to instead use a vanilla JavaScript approach, relying on [good design patterns](http://www.dofactory.com/javascript/design-patterns) for structure, but that would not meet the requirement for a framework. So after a couple hours of research and investigating several starter packages, I decided to build a simple Angular1 app because it's what I knew best.

* **JavaScript:** I wanted to demonstrate a clean structure using [good design patterns](http://www.dofactory.com/javascript/design-patterns), I also wanted to demonstrate an organized modular structure in Angular, where each module could handle its own routing knowledge. So I invested a few hours to think-through the implementation and refactor the code.

* **HTML:** Using a `<table>` element to structure each "Thread" created some complexity, because every "Error message" row element would contain a linked "Code sample" that had to span the full-width of the table. To get this desired result, I used a separate row element for that matching "Code sample". Clicking on the "Error message" row would toggle visibility for the joining element. Structurally this is not ideal, because two linked table rows should be grouped together in some way, but it was a simple solution for the specific case.
 
* **CSS:** I used the [BEM - Block Element Modifier](http://getbem.com/) convention for naming, which requires forethought when choosing class names. Also, it was tricky to get the correct behavior for the border size & color of the table rows. HTML is quirky when deciding border color for a row element, because the higher row gets precedence to set the border style. This adds complexity when a lower row wants to change the default border color, like ie. when an "Error message" needs a red border (instead of the default blue border), but after overwriting the border style, one of the edges would still appear as blue. Also, the border style for an "Error message" -- which has a light-red outline -- changes when expanded to have a deep-red and thick border that is shared with its joining "Code sample" row element, also eliminating a shared border between the two rows. So, with some adjustments I was able to get the demo to match the design mock-up, but that process consumed a couple more hours.

In summary, I exceeded the suggested 1-2 hour time window, but I wanted to make sure that my code was able to adequately demonstrate my experience, quality, and attention to detail. I did not want to submit an incomplete project, that would leave room for interpretation, and portray my abilities in a questionable manner.

### Before you being

Your computer must have NodeJS 6.0+ installed to run the demo. You can download and install the latest version from [nodejs.org](https://nodejs.org). 

### Try the demo

1. Download this github package to your computer, or clone the repository.

2. Using console, `cd` into the cloned directory.

3. Run `npm start` in console.

4. Go to `http://localhost:3000` in your `Chrome` or `Firefox` browser to view the website (p.s. currently not tested in Safari, can expect to see design issues there).
