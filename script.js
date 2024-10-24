// scripts.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading for FAQs (sample implementation)
const faqs = [
    {
        question: "How do I register for courses?",
        answer: "You can register by visiting the Calculate Fees page to choose your courses and submit your information."
    },
    {
        question: "What discounts are available?",
        answer: "We offer discounts based on the number of courses you select: 5% for two courses, 10% for three, and 15% for more than three."
    },
    {
        question: "What are the payment methods?",
        answer: "We accept EFT payments and cash at our Johannesburg office. Please contact us for more details."
    },
    {
        question: "What is the duration of each course?",
        answer: "The duration varies depending on the course: Six-Month Courses last for six months, while Six-Week Courses are completed in six weeks."
    },
    {
        question: "Are there any prerequisites for the courses?",
        answer: "Most courses have no prerequisites, but some may require basic skills or knowledge. Please refer to the course details for specific requirements."
    },
    // Add more FAQs here
];

// Function to load FAQs dynamically
function loadFAQs() {
    const faqContainer = document.getElementById('faqList');
    faqs.forEach(faq => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${faq.question}</strong><p>${faq.answer}</p>`;
        faqContainer.appendChild(li);
    });
}

// Validate contact form
function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If validation passes, submit the form
    document.forms[0].submit();
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    loadFAQs();
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateContactForm);
    }
});
