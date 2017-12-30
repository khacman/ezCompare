"use strict";
import messageFactory from "./messageFactory";

it("Message creator", () => {
    const testCases = [
        {
            input: [
                "https://www.lazada.sg/official-oneplus-5-6gb-ram-64gb-rom-slate-gray-41850296.html?spm=a2o42.searchlistcategory.list.12.400b74145rjYdx",
                "https://www.lazada.sg/apple-iphone-8-256gb-2gb-ram-grey-60291398.html?spm=a2o42.campaign.list.90.518be942CQwT7t"
            ],
            output: {
                urls: [
                    "https://www.lazada.sg/official-oneplus-5-6gb-ram-64gb-rom-slate-gray-41850296.html?spm=a2o42.searchlistcategory.list.12.400b74145rjYdx",
                    "https://www.lazada.sg/apple-iphone-8-256gb-2gb-ram-grey-60291398.html?spm=a2o42.campaign.list.90.518be942CQwT7t"
                ]
            }
        },
        {
            input: [
                "https://www.lazada.sg/official-oneplus-5-6gb-ram-64gb-rom-slate-gray-41850296.html?spm=a2o42.searchlistcategory.list.12.400b74145rjYdx",
            ],
            output: {
                urls: [
                    "https://www.lazada.sg/official-oneplus-5-6gb-ram-64gb-rom-slate-gray-41850296.html?spm=a2o42.searchlistcategory.list.12.400b74145rjYdx",
                ]
            }
        },
        {
            input: [
                "abc",
                "https://www.lazada.sg/apple-iphone-8-256gb-2gb-ram-grey-60291398.html?spm=a2o42.campaign.list.90.518be942CQwT7t"
            ]
        }
    ];

    testCases.forEach(c => {
        if (!c.output) {
            expect(() => {
                messageFactory.createGetPageMessage(c.input);
            }).toThrow();
        } else {
            expect(messageFactory.createGetPageMessage(c.input)).toMatchObject(c.output);
        }
    });
});