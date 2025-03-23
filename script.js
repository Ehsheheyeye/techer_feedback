document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    const schoolName = document.getElementById('schoolName').value;
    const teacherName = document.getElementById('teacherName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const designation = document.getElementById('designation').value;

    if (!schoolName || !teacherName || !mobileNumber || !designation) {
        alert('कृपया सर्व आवश्यक माहिती भरा!');
        return;
    }

    if (!/^[0-9]{10}$/.test(mobileNumber)) {
        alert('कृपया वैध १० अंकी मोबाईल नंबर टाका!');
        return;
    }

    // Collect form data in the specified sequence
    const formData = new FormData(this);
    const data = {
        schoolName: formData.get('schoolName'),
        teacherName: formData.get('teacherName'),
        mobileNumber: formData.get('mobileNumber'),
        designation: formData.get('designation'),
        q1_training: formData.get('q1_training'),
        q1_usage: formData.get('q1_usage'),
        q1_reason: formData.get('q1_reason') || '',
        q2_training: formData.get('q2_training'),
        q2_usage: formData.get('q2_usage'),
        q2_reason: formData.get('q2_reason') || '',
        q3_training: formData.get('q3_training'),
        q3_usage: formData.get('q3_usage'),
        q3_reason: formData.get('q3_reason') || '',
        q4_training: formData.get('q4_training'),
        q4_usage: formData.get('q4_usage'),
        q4_reason: formData.get('q4_reason') || '',
        q5_training: formData.get('q5_training'),
        q5_usage: formData.get('q5_usage'),
        q5_reason: formData.get('q5_reason') || '',
        q6_training: formData.get('q6_training'),
        q6_usage: formData.get('q6_usage'),
        q6_reason: formData.get('q6_reason') || '',
        q7_training: formData.get('q7_training'),
        q7_usage: formData.get('q7_usage'),
        q7_reason: formData.get('q7_reason') || '',
        q8_training: formData.get('q8_training'),
        q8_usage: formData.get('q8_usage'),
        q8_reason: formData.get('q8_reason') || '',
        q9_training: formData.get('q9_training'),
        q9_usage: formData.get('q9_usage'),
        q9_reason: formData.get('q9_reason') || '',
        q10_training: formData.get('q10_training'),
        q10_usage: formData.get('q10_usage'),
        q10_reason: formData.get('q10_reason') || '',
        q11_training: formData.get('q11_training'),
        q11_usage: formData.get('q11_usage'),
        q11_reason: formData.get('q11_reason') || '',
        q12_training: formData.get('q12_training'),
        q12_usage: formData.get('q12_usage'),
        q12_reason: formData.get('q12_reason') || '',
        q13_training: formData.get('q13_training'),
        q13_usage: formData.get('q13_usage'),
        q13_reason: formData.get('q13_reason') || '',
        q14_training: formData.get('q14_training'),
        q14_usage: formData.get('q14_usage'),
        q14_reason: formData.get('q14_reason') || '',
        q15_training: formData.get('q15_training'),
        q15_usage: formData.get('q15_usage'),
        q15_reason: formData.get('q15_reason') || '',
        q16_training: formData.get('q16_training'),
        q16_usage: formData.get('q16_usage'),
        q16_reason: formData.get('q16_reason') || '',
        q17_training: formData.get('q17_training'),
        q17_usage: formData.get('q17_usage'),
        q17_reason: formData.get('q17_reason') || '',
        rating: formData.get('rating'),
        suggestions: formData.get('suggestions') || ''
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwQG2EG3KlHv69gQqNAdu-hLWYP4YFeuIy6scakdt2EFSNffii5hfVuH7UNvrzTH88/exec';

    console.log('Sending data:', JSON.stringify(data)); // Log data being sent

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors' // Add this to avoid CORS issues during testing
    })
    .then(response => {
        console.log('Response received:', response); // Log raw response
        alert('डेटा यशस्वीरित्या जतन झाला!'); // Success message
        this.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Fetch error:', error); // Log fetch error
        alert('डेटा जतन करताना त्रुटी आली: ' + error.message + '. कृपया पुन्हा प्रयत्न करा.');
    });
});