# GFG-FEBRUARY-INTERNSHIP
Code Testing Backend
This backend is designed to evaluate code submissions for a learning platform's Web Development assignment. It provides clear feedback to users, indicating any areas where their code does not meet the specified criteria.

Requirements
To run the backend, you need to install the following:

Node.js (v14.18.0 or higher)
Express.js (v4.17.1 or higher)

Getting Started
To get started, follow these steps:

1. Install the dependencies:
bash
1 npm install express

2.Create a file `test_cases.js` with the test cases for your code evaluation. Each test case should be a JavaScript object with the following properties:
`name`: The name of the test case.
`function`: The function to be tested.
`inputs`: An array of inputs for the function.
`expected_output`: The expected output of the function.

For example:

javascript
1.module.exports = {
2  test_cases: [
3    {
4      name: 'Test 1',
5      function: (a, b) => a + b,
6      inputs: [1, 2],
7      expected_output: 3,
8    },
9    {
10      name: 'Test 2',
11      function: (a, b) => a * b,
12      inputs: [1, 2],
13      expected_output: 2,
14    },
15  ],
16 };

3.Run the backend:
bash
1 node server.js
The backend will listen for incoming requests on port 3000 (http://localhost:3000).

4.Use the HTML form to send a POST request to the /run_tests endpoint with the code submission as a JSON object.

Endpoints
`POST /run_tests`: The main endpoint for the backend. When the endpoint receives a POST request, it evaluates the code submission against the test cases and returns the test results as a JSON object.

Tests
To test the backend, you can use a tool like Postman to send a POST request to the /run_tests endpoint. The code submission should be a JSON object with the following format:

json
{
  "code_submission": "function add(a, b) { return a + b; }"
}

The backend will evaluate the code submission against the test cases and return the test results as a JSON object.

Conclusion
This backend provides a simple and effective way to test code submissions for a learning platform's Web Development assignment. By using a consistent and standardized set of test cases, users can receive clear feedback and guidance on their code submissions.

Future Improvements
The backend is a work in progress and has some limitations. Some potential improvements include:

Adding input validation to prevent malicious code submissions.
Allowing users to create and manage their own test cases.
Implementing a better mechanism for testing multiple code submissions in parallel.
Adding support for other programming languages.

If you have any suggestions or ideas for improvement, please feel free to contribute to the project.



