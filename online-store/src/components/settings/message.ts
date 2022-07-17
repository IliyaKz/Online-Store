import { IMessage } from '../interfacesAndTypes';

class Message implements IMessage {

  showMessage(): void {
    const products  = document.querySelector('.products') as HTMLElement;
    if (products === undefined) return;
    const message = document.querySelector('.no-find-message') as HTMLElement;
    if (message === undefined) return;
    if (products.innerHTML === '') {
      message.classList.add('shown');
    } else {
      message.classList.remove('shown');
    }
  }

}

export { Message };