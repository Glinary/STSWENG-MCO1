const supertest = require('supertest');
const app = require('../../index.js');



/********** START OF GET REQUESTS **********/
describe("GET /", () => {
    describe("when onboarding loads properly", () => {
        test("return a status code 200", async () => {
            await supertest(app).get("/").expect(200);
        })
    })

    describe("when starting page does not exist", () => {
        test("return a status code 404", async () => {
            await supertest(app).get("/ho").expect(404);
        })
    })
})

describe("GET /home", () => {
    //TODO: fix since uID is undefined from req.session.user.uID
    // describe("when home page loads successfully", () => {
    //     test("return a status code 200", async () => {
    //         await supertest(app).get("/home").expect(200);
    //     })
    // })

    describe("when home page loads with additional url header", () => {
        test("return a status code 404", async () => {
            await supertest(app).get("/home/12345").expect(404);
        })
    })
})

describe("GET /bag", () => {
    //TODO: find the right syntax to load the right user id and bag id
    // describe("when bag loads with user id and bag id", () => {
    //     test("return a status code 200", async () => {
    //         await supertest(app).get(`/bag/${req.params.user}/${req.params.id}`).expect(200);
            
    //     })
    // })

    describe("when bag loads without user id and bag id", () => {
        test("return a status code 404", async () => {
            await supertest(app).get("/bag").expect(404);
        })
    })
})

//TODO: add test for GET /notification
// describe("GET /notification", () => {
//     describe("when notification loads properly", () => {
//         test("return a status code 200", async () => {
//             await supertest(app).get(`/notification`).expect(200);
//         })
//     })
// })

describe("GET /addbag", () => {
    //TODO: fix since uID is undefined from req.session.user.uID
    // describe("when bag can be added to existing user id", () => {
    //     const userId = '65c214c5e060af77ba686b39';
    //     test("return a status code 200", async () => {
    //         await supertest(app).get(`/addbag/${userId}`).expect(200);
    //     })
    // })

    describe("when addbag page loads properly", () => {
        test("return a status code 200", async () => {
            await supertest(app).get(`/addbag`).expect(200);
        })
    })

    //TODO: add test for GET /addbag page loads with a nonexistent user id
    // describe("when addbag page loads with a nonexistent user id", () => {
    //     const userId = '88888';
    //     test("return a status code 200", async () => {
    //         await supertest(app).get(`/addbag/${userId}`).expect(404);
    //     })
    // })
})

describe("GET /editbag", () => {
    describe("when editbag page loads to existing uid", () => {
        const bagId = '6607c2400a1effb0643f2f3b';
        test("return a status code 200", async () => {
            await supertest(app).get(`/editbag/${bagId}`).expect(200);
        })
    })

    describe("when bag is added without user id", () => {
        test("return a status code 404", async () => {
            await supertest(app).get(`/editbag`).expect(404);
        })
    })

    //TODO: add test for GET /editbag loads with nonexistent id credentials
    // describe("when bag is added without user id", () => {
    //     const userId = '8888';
    //     const bagId = '8888';
    //     test("return a status code 200", async () => {
    //         await supertest(app).get(`/addbag/${userId}/${bagId}`).expect(404);
    //     })
    // })
})

describe("GET /additem", () => {
    //TODO: make test work with the needed id (currently undefined)
    // describe("when additem page loads to existing user id", () => {
    //     const userId = '6607c1d30a1effb0643f2f34';
    //     test("return a status code 200", async () => {
    //         await supertest(app).get(`/additem/${userId}`).expect(200);
            
    //     })
    // })

    describe("when additem page loads without user id", () => {
        test("return a status code 404", async () => {
            await supertest(app).get(`/additem`).expect(404);
        })
    })

    //TODO: add test for GET /additem loads with nonexistent id credentials
    // describe("when item is added with nonexisting user id", () => {
    //     const userId = '8888';
    //     test("return a status code 404", async () => {
    //         await supertest(app).get(`/additem/${userId}`).expect(404);
            
    //     })
    // })
})

describe("GET /itemgallery", () => {
    //TODO: make test work since req.session.user.uID is undefined
    // describe("when itemgallery page loads properly", () => {
    //     const bagId = '65cc7fd1afdea0d2416714a7';
    //     test("return a status code 200", async () => {
    //         await supertest(app).get(`/itemgallery/${bagId}`).expect(200);
    //     })
    // })
})

describe("GET /login", () => {
    describe("when login page loads properly", () => {
        test("return a status code 200", async () => {
            await supertest(app).get(`/login`).expect(200);
        })
    })
})

describe("GET /register", () => {
    describe("when register page loads properly", () => {
        test("return a status code 200", async () => {
            await supertest(app).get(`/register`).expect(200);
        })
    })

})


//TODO: make test for GET /profile
// describe("GET /profile", () => {
//     describe("when profile page loads properly", () => {
//         test("return a status code 200", async () => {
//             await supertest(app).get(`/profile`).expect(200);
            
//         })
//     })
// })

describe("GET /editprofile", () => {
    describe("when editprofile page loads properly", () => {
        test("return a status code 200", async () => {
            await supertest(app).get(`/editprofile`).expect(200);
        })
    })
})


/********** END OF GET REQUESTS **********/
/********** START OF POST REQUESTS **********/
describe("POST /postRegister", () => {
    // NOTE: Uncomment before testing and remove credentials once tested (code is nonreusable)
    // describe("when user registers with new credentials", () => {
    //     test("return a status code 200", async () => {
    //         const response = await supertest(app).post(`/postRegister`).send({
    //             registerName: "Gleglegle",
    //             registerEmail: "gleeee@gmail.com",
    //             registerPassword: "1234567890",
    //         })
    //         expect(response.status).toBe(200);
    //     })
    // })

})

describe("POST /postlogin", () => {
    describe("when user logs in with correct credentials", () => {
        test("return a status code 200", async () => {
            const response = await supertest(app).post('/postlogin').send({
                email: "gleezelluy@dlsu.edu.ph",
                password: "1234567890"
            })
            expect(response.status).toBe(200);
        })
    })

    // TODO: expected error status code is incorrect
    // describe("when user logs in with incorrect email", () => {
    //     test("return a status code 404", async () => {
    //         const response = await supertest(app).post('/postlogin').send({
    //             email: "gleeze@dlsu.edu.ph",
    //             password: "1234567890"
    //         })
    //         expect(response.status).toBe(404);
    //     })
    // })

    describe("when user logs in with incorrect password", () => {
        test("return a status code 401", async () => {
            const response = await supertest(app).post('/postlogin').send({
                email: "gleezelluy@dlsu.edu.ph",
                password: "1111111111"
            })
            expect(response.status).toBe(401);
        })
    })
})

describe("POST /postSignout", () => {
    describe("when user signs out", () => {
        test("redirect to /login", async () => {
            const response = await supertest(app).post('/postSignout').send({})
            expect(response.header['location']).toBe('/login');
        })
    })
})



/********** END OF POST REQUESTS **********/
