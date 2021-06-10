import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { alert, error } from '@pnotify/core';

export function warningAlert(message) {
  alert({
    title: 'NOTICE',
    text: message,
    delay: 5000,
  });
}
