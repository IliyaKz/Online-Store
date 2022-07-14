import { Reset } from './reset';

class Basket {

  static basketContent: Array<string> = [];

  getContent(): void {
    if (localStorage.getItem('currentBasket') !== null) {
      Basket.basketContent = JSON.parse(localStorage.getItem('currentBasket') as string);
    }
  }
 
  setContent(): void {
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('currentBasket', JSON.stringify(Basket.basketContent));
      }
    });
  }

  createBasket(): void {
    const target = document.querySelector('.basket') as HTMLElement;
    const counter = document.createElement('div') as HTMLElement;
    counter.classList.add('basket-counter');
    counter.innerText = '0';
    if (localStorage.getItem('basketValue') !== null) {
      counter.innerText = localStorage.getItem('basketValue') as string;
    }
    const messageContainer = document.createElement('div') as HTMLElement;
    messageContainer.classList.add('basket-message-container');
    const message = document.createElement('div') as HTMLElement;
    message.classList.add('basket-message');
    target.append(counter);
    target.append(messageContainer);
    messageContainer.append(message);
    this.getContent();
    window.addEventListener('beforeunload', () => {
      if (Reset.isSaveAllowed) {
        localStorage.setItem('basketValue', counter.innerText);
      }
    });
  }
 
}

export { Basket };