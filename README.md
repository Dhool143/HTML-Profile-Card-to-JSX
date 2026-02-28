# HTML Profile Card to JSX

##  Project Overview

This project converts a standard HTML user profile card into a React JSX component.  
The goal of this assignment is to demonstrate understanding of:

- JSX syntax
- React functional components
- Props
- Conditional rendering
- Handling edge cases



##  Technologies Used

- React
- JavaScript (ES6)
- JSX
- Node.js
- npm



##  How to Run the Project

1. Clone the repository:
2. Navigate into the project folder:
3. Install dependencies:
5. Open your browser and visit:



##  Component Description

### UserProfile Component

The `UserProfile` component:

- Accepts `name` and `email` as props
- Displays a profile image
- Dynamically renders name and email
- Uses conditional rendering for the email link
- Displays fallback text if props are missing

Example usage:

```jsx
<UserProfile name="Hanna Ali" email="henna.ali@seattle.com" />

 Test Cases

 Normal Cases
	1.	Hanna Ali – Valid name and email
	2.	Eric John – Valid name and email
	3.	David Smith – Valid name and email

 Edge Cases
	1.	Empty name
	2.	Empty email
	3.	No props passed

The component handles missing data using:
	•	Logical OR (||) for fallback values
	•	Conditional rendering (&&) for the email link


    Features Implemented
	•	Converted HTML to JSX
	•	Used className instead of class
	•	Wrapped JSX in a single parent <div>
	•	Closed all self-closing tags properly
	•	Used template literals for dynamic email links
	•	Implemented conditional rendering
	•	Added multiple test cases



  Demonstration

A video demonstration is provided showing:
	•	Application functionality
	•	Normal test cases
	•	Edge case handling
