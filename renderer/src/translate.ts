import get from 'lodash/get';

import config from './configs/config';
import en from '../public/data/en/en_i18n';
import ko from '../public/data/ko/ko_i18n';

const translations: any = {
	en: en,
	ko: ko,
};

const translate = (key: string): string => {
	const lang = config.language;

	return get(translations, `${lang}.${key}`, get(translations, `en.${key}`, ''));
};

export default translate;
