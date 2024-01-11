// Import only the Bootstrap components we need
import * as Popper from '@popperjs/core/lib';
import Collapse from 'bootstrap/js/src/collapse';
import Dropdown from 'bootstrap/js/src/dropdown';
import Popover from 'bootstrap/js/src/popover';
import './theme';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((collapse) => new Collapse(collapse, {}));
  document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((dropdown) => new Dropdown(dropdown, {}));
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => new Popover(popover, {}));
});
