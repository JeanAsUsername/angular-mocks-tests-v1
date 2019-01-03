
describe('usersService', function() {

    let httpBackend,
        usersService = {},
        users = [
            {
                name: 'Jean',
                lastName: 'Nicola',
                age:  19
            }
        ];

    beforeEach(module('angularApp'))
    beforeEach(inject(function(_$httpBackend_, _usersService_) {
        httpBackend = _$httpBackend_;
        usersService = _usersService_;
    }))

    it('Must hit the correct url', function() {

        let data;

        httpBackend
            .when('GET', 'https://jsonplaceholder.typicode.com/users')
            .respond(200, users)

        usersService
            .getUsers()
            .then(function (response) {
                data = response;
            })

        httpBackend.flush();

        expect(data).toEqual(users)



    })
})