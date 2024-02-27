const request = require('supertest');
const app = require('../../index.js');
const { add_bag } = require('../js/add_bag');


/*
    TODO: "generate_bag_UID()"
*/

/*
    This function ensures that the added bag is unique and returns 200.

    @param1 - UID from generate_bag_uid function
    @param2 - bag category
    @param3 - user id of bag collaborators
    @param4 - bag name
    @param5 - bag weight
    @param6 - bag icon color
    @param7 - packing status
    @param8 - date the bag will be in use
    @param9 - UID of items

    @return - 200
*/
test('adding a bag is successful and returns 200', () => {
    expect(add_bag(123456789, 'school', null, 'schoolbag', null, 
    'red', 'not yet started', 'March 1, 2024', null)).toBe(200);
});

describe("POST /ab", () => {
    describe("given a valid UID, bag category, id of bag collaborations, bag name, bag weight, bag icon color, packing status, date, and uid of items", () => {
        test("return a status code 200", async () => {
            const res = await request(app).post("/ab").send({
                //_id: 123456789,
                bagCategory: "school",
                bagName: "schoolbag",
                bagWeight: null,
                bagColor: "red",
                packingStatus: "not yet started",
                dateUsage: "March 1, 2024",
                bagCollabs: [123456789],
                items: "",
            })
            expect(res.statusCode).toBe(200);
        })
    })

    describe("given invalid bagCategory parameter", () => {
        test("return a status code that is not 200", async () => {
            const res = await request(app).post("/ab").send({
                //_id: 123456789,
                bagCategory: 123, //should be a string
                bagName: "schoolbag",
                bagWeight: null,
                bagColor: "red",
                packingStatus: "not yet started",
                dateUsage: "March 1, 2024",
                bagCollabs: [123456789],
                items: "",
            })
            expect(res.statusCode).not.toBe(200);
        })
    });
})

/*
    This function ensures that the added bag is a duplicate and does not return 200.

    @param1 - UID from generate_bag_uid function
    @param2 - bag category
    @param3 - user id of bag collaborators
    @param4 - bag name
    @param5 - bag weight
    @param6 - bag icon color
    @param7 - packing status
    @param8 - date the bag will be in use
    @param9 - UID of items

    @return - 200
*/

/*
TODO: uncomment this function once the add_bag function has been implemented.
test('adding a duplicate bag has failed and does not return 200', () => {
    add_bag(123456789, 'school', null, 'schoolbag', null, 
    'red', 'not yet started', 'March 1, 2024', null);
    expect(add_bag(123456789, 'school', null, 'schoolbag', null, 
    'red', 'not yet started', 'March 1, 2024', null)).not.toBe(200);
});
*/