import {Tabs} from './tabs';

let tabs;

const initTabs = () => {
  tabs = new Tabs();
  const tabsParents = document.querySelectorAll('[data-tabs="parent"]');
  Array.from(tabsParents).forEach((tab) => {
    const buttons = tab.querySelectorAll('[data-tabs="control"]');
    const contents = tab.querySelectorAll('[data-tabs="element"]');
    const lengthDiff = buttons.length - contents.length;

    if (lengthDiff === 0) {
      return;
    }
    Array.from(buttons).reverse().slice(0,lengthDiff).forEach((button) => delete button.dataset.tabs)
  });
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export {initTabs, tabs};
