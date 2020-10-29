'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import kitty from './img/kitty.jpg';
import woman from './img/circle.svg';
import font from './fonts/Abibas.otf';
import './styles/main.css';

import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

ReactDOM.render(
	<React.StrictMode>
		<ConfigProvider locale={ruRU}>

		</ConfigProvider>
	</React.StrictMode>
);