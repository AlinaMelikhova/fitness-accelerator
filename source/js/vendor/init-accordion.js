import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;

  Array.from(document.querySelectorAll('.faq__accordeon-list')).forEach(
    (accordion) => {
      accordions.closeAllAccordion(accordion);
    }
  );
};

export {initAccordions, accordions};
