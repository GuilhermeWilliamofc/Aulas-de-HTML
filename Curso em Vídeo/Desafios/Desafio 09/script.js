let video = document.getElementById('video')

video.addEventListener('mouseenter', function(){
    video.style.textDecoration = 'underline'
});

video.addEventListener('mouseleave', function(){
    video.style.textDecoration = 'none'
});