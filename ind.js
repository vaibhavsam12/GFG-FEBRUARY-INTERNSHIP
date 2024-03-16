const express = require('express');
const app = express();
const test_cases = require('./test_cases.js');

app.use(express.json());

app.post('/run_tests', (req, res) => {
    const code_submission = req.body.code_submission;
    const test_results = [];

    for (let test_case of test_cases.test_cases) {
        const result = evaluate_code_submission(code_submission, test_case);
        test_results.push(result);
    }

    res.json(test_results);
});

function evaluate_code_submission(code_submission, test_case) {
    // Assuming the code submission is in JavaScript
    try {
        eval(code_submission);
        const result = test_case.function(...test_case.inputs);
        if (result === test_case.expected_output) {
            return {'status': 'pass', 'test_case': test_case.name};
        } else {
            return {'status': 'fail', 'test_case': test_case.name, 'message': `Expected output: ${test_case.expected_output}, Actual output: ${result}`};
        }
    } catch (e) {
        return {'status': 'error', 'test_case': test_case.name, 'message': e.message};
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
