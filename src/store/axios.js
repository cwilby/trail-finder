import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const metaTag = document.querySelector('meta[name="csrf-token"]');

if (metaTag) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = metaTag.getAttribute('content');
}

export default axios;
