'use strict';

allure.api.addTranslation('en', {
    tab: {
        il: {
            name: 'IL'
        }
    },
    widget: {
        il: {
            name: 'Features by stories',
            showAll: 'show all'
        }
    }
});

allure.api.addTranslation('ru', {
    tab: {
        il: {
            name: 'Ил'
        }
    },
    widget: {
        il: {
            name: 'Функциональность',
            showAll: 'показать все'
        }
    }
});

allure.api.addTab('il', {
    title: 'tab.il.name', icon: 'fa fa-time',
    route: 'il(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',
    onEnter: (function (testGroup, testResult, testResultTab) {
        return new allure.components.TreeLayout({
            testGroup: testGroup,
            testResult: testResult,
            testResultTab: testResultTab,
            tabName: 'tab.il.name',
            baseUrl: 'il',
            url: 'data/il.json'
        });
    })
});

// allure.api.addWidget('widgets', 'il', allure.components.WidgetStatusView.extend({
//     rowTag: 'a',
//     title: 'widget.il.name',
//     baseUrl: 'il',
//     showLinks: true
// }));
