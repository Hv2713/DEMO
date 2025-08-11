document.addEventListener('DOMContentLoaded', () => {
    const timelineLine = document.querySelector('.timeline-line');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const animationDelay = 800; 

    timelineLine.classList.add('animate-line');
    
    setTimeout(() => {
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-item');
                item.classList.add('animate-image');
            }, index * animationDelay);
        });
    }, 500); 
}); 