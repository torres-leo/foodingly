import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import './assets/scss/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: { authorization: `Bearer ${import.meta.env.VITE_API_URL}` },
});

const cache = new LRU({ max: 10 });
configure({ axios: instance, cache });

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
