const videoContainer = document.querySelector(
  '.about__multimedia-video-container'
);
const videoPoster = document.querySelector('.about__multimedia-video-cover');
const videoButton = document.querySelector('.about__video-cover-button');

const addYoutubeVideo = () => {
  const youtubeFrame = document.createElement('iframe');
  youtubeFrame.src =
    'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&rel=0';
  youtubeFrame.classList.add('about__multimedia-video');
  youtubeFrame.title = 'YouTube video player';
  youtubeFrame.frameborder = '0';
  youtubeFrame.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  youtubeFrame.allowfullscreen = true;

  videoContainer.appendChild(youtubeFrame);
};

const playVideo = () => {
  videoButton.addEventListener('click', () => {
    videoPoster.style.display = 'none';
    addYoutubeVideo();
  });
};

export {playVideo};
