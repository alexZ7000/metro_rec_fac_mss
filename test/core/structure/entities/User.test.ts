import UserMock from "@mocks/UserMock";

describe("Testing User Entity", () => {
    it("Should create a User", () => {
        const user_mock = new UserMock().users;
        const user = user_mock[1];

        expect(user.id).toBe(user_mock[1].id);
        expect(user.name).toBe(user_mock[1].name);
        expect(user.college).toBe(user_mock[1].college);
        expect(user.cpf).toBe(user_mock[1].cpf);
        expect(user.rg).toBe(user_mock[1].rg);
        expect(user.birthdate).toBe(user_mock[1].birthdate);
        expect(user.registration).toBe(user_mock[1].registration);
        expect(user.created_at).toBe(user_mock[1].created_at);
        expect(user.updated_at).toBe(user_mock[1].updated_at);
    });
});
