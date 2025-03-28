const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
    } else {
        entry.target.classList.remove("fade-in"); 
    }
});
}, { threshold: 0.20 }); 

const fadeElements = document.querySelectorAll('.hero, .about-me, .card, .my-tech, .projetos, .projeto-card');

fadeElements.forEach(element => {
observer.observe(element);
});

const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('nav ul li');

const sectionObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
const menuItem = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
if (entry.isIntersecting) {
menuItem.parentElement.classList.add('active'); 
} else {
menuItem.parentElement.classList.remove('active');  
}
});
}, { threshold: 0.20 });  

sections.forEach(section => {
sectionObserver.observe(section); 
});
