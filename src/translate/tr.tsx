import { useEffect } from 'react';

const YandexTranslate = () => {
    //   const systemLang = window.navigator.language.slice(0, 2);
    const yatranslate = {
        lang: 'en',
        langFirstVisit: 'ru',
    };
    useEffect(() => {
        // Если язык для первого посещения установлен и localStorage пуст, устанавливаем его
        if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
            /* Если установлен язык перевода для первого посещения и в localStorage нет yt-widget */
            /* If the translation language is installed for the first visit and in localStorage no yt-widget */
            console.log('Язык по умолчанию', yatranslate.langFirstVisit);

            yaTranslateSetLang(yatranslate.langFirstVisit);
        }

        function yaTranslateSetLang(lang: string) {
            // Записываем выбранный язык в localStorage объект yt-widget
            // Writing the selected language to localStorage
            console.log('!!!!!!!!!!!!', lang);

            localStorage.setItem(
                'yt-widget',
                JSON.stringify({
                    lang: lang,
                    active: true,
                })
            );
        }

        const script = document.createElement('script');
        script.src = `https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=${yatranslate.lang}&widgetTheme=light&autoMode=false`;
        script.async = true;
        document.body.appendChild(script);

        document.addEventListener('DOMContentLoaded', function () {
            // Start
            yaTranslateInit();
        });

        function yaTranslateInit() {
            //Добавь в условие ниже && !localStorage.getItem('yt-widget') и тогда язык не будет по умолчанию системный
            if (yatranslate.langFirstVisit && !localStorage.getItem('yt-widget')) {
                /* Если установлен язык перевода для первого посещения и в localStorage нет yt-widget */
                /* If the translation language is installed for the first visit and in localStorage no yt-widget */
                console.log('Язык по умолчанию', yatranslate.langFirstVisit);

                yaTranslateSetLang(yatranslate.langFirstVisit);
            }

            function yaTranslateSetLang(lang: string) {
                // Записываем выбранный язык в localStorage объект yt-widget
                // Writing the selected language to localStorage
                console.log('!!!!!!!!!!!!', lang);

                localStorage.setItem(
                    'yt-widget',
                    JSON.stringify({
                        lang: lang,
                        active: true,
                    })
                );
            }
            yaTranslateInit();
        }
        return () => {};
    }, []);
    return <div id="ytWidget" style={{ display: 'none' }}></div>;
};

export default YandexTranslate;
