const toggleBtn = document.getElementById("toggleButton");
const navBar = document.getElementById("nav-bar");
const barIcon = document.getElementById("barIcon");

toggleBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
    barIcon.classList.toggle("fa-bars");
    barIcon.classList.toggle("fa-xmark");
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // 
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }
  
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
  
    document.getElementById("contactForm").reset();
  });

  function answer(question) {
    const response = document.getElementById("response");
  
    if (question === 'from') {
      response.textContent = "I was born and raised in Nagoya, which is one of the major cities in Japan.";
    } else if (question === 'study') {
      response.textContent = "I study Computer Science at BYUH. My minors are Music and Social Work.";
    } else if (question === 'fun') {
      response.textContent = "My friend's guitar teacher could teach how to play the bass, so my parents asked me if I wanted to learn how to play the bass. I decided to do that because low tone was attractive to me.";
    }
  }

  