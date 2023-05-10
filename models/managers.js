const managers = [
    {   id: 103,
        firstName: "Maria",
        lastName: "John",
        title: "area manager",
        email: "MJohn@email.com",
        phone: "513-111-1111",
        department_id: 60,
    },
    {   id: 114,
        firstName: "Michael",
        lastName: "Doe",
        title: "area manager",
        email: "MichaelDoe@email.com",
        phone: "513-111-1111",
        department_id: 30,
    },
    {   id: 121,
        firstName: "Tom",
        lastName: "Cruise",
        title: "operations manager",
        email: "tcruise@email.com",
        phone: "513-111-1111",
        department_id: 50,
    },
    {   id: 200,
        firstName: "John",
        lastName: "Doe",
        title: "area manager",
        email: "johndoe@email.com",
        phone: "513-111-1111",
        department_id: 10,
    },
    {   id: 201,
        firstName: "Kelly",
        lastName: "Jordan",
        title: "area manager",
        email: "kellyJordan@email.com",
        phone: "513-111-1111",
        department_id: 20,
    },
    {   id: 203,
        firstName: "Morpheus",
        lastName: "Hamilton",
        title: "operations manager",
        phone:"8439743294793",
        email:"Merpheus@abc.com",
        department_id: 40,
    }
    

]

module.exports = managers;



// DEPARTMENT_ID | DEPARTMENT_NAME      | MANAGER_ID | LOCATION_ID |
// +---------------+----------------------+------------+-------------+
// |            10 | Administration       |        200 |        1700 |
// |            20 | Marketing            |        201 |        1800 |
// |            30 | Purchasing           |        114 |        1700 |
// |            40 | Human Resources      |        203 |        2400 |
// |            50 | Shipping             |        121 |        1500 |
// |            60 | IT                   |        103 |        1400 |