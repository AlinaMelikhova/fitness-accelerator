// const teamList = document.querySelector('.team__list');
const breakpoint = window.matchMedia('(min-width:1200px)');

export const handlerTeamMembers = () => {
  if (!breakpoint.matches) {
    Array.from(document.querySelectorAll('.team__item-container')).forEach(
      (member) => {
        member.addEventListener('click', () => {
          if (member.classList.contains('is-opened')) {
            member.querySelector('.team__item-hover-container').style.display =
              'none';
            member.querySelector('.team__item-name').style.display = 'block';
          } else {
            member.querySelector('.team__item-hover-container').style.display =
              'block';
            member.querySelector('.team__item-name').style.display = 'none';
          }
          member.classList.toggle('is-opened');
        });
      }
    );
  } else {
    return;
  }
};
