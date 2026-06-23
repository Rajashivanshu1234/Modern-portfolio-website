const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign =document.querySelector(".hover-sign")



const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
    
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})
const contactform = document.getElementById('contact');

emailjs.init('hzUlsSsnSBHFI1jQL'); // Public key from EmailJS

const sendEmail = async (e) => {
e.preventDefault();
try {
await emailjs.sendForm('service_ak5upvg', 'template_jkovdkp', '#contact-form');
alert('Message sent successfully!');
contactform.reset();
} catch (err) {
console.error(err);
alert('Message not sent. Check console for details.');
}
};

contactform.addEventListener('submit', sendEmail);


