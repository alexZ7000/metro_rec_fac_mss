import User from "@entities/User";

export default class UserMock {
    public users: User[];
    constructor() {
        this.users = [
            new User({
                id: "2da789ad-b63c-4db8-bd41-6762076eaf5e",
                name: "Alex Souza",
                college: {
                    name: "Universidade de Tecnologia",
                    course: "Ciência da Computação",
                    type: "Bacharelado"
                },
                cpf: "655.575.500-89",
                rg: "12.345.678-9",
                birthdate: new Date("1998-05-20"),
                registration: new Date("2022-03-01"),
                created_at: new Date("2023-08-30"),
                updated_at: new Date("2024-08-30")
            }),
            new User({
                id: "2da789ad-b63c-4db8-bd41-6762076eaf52",
                name: "Mariana Lima",
                college: null,
                cpf: "377.062.510-20",
                rg: "987654321",
                birthdate: new Date("2000-10-10"),
                registration: new Date("2021-08-15"),
                created_at: new Date("2023-08-30"),
                updated_at: new Date("2024-08-30")
            }),
            new User({
                id: "2da789ad-b63c-4db8-bd41-6762076eaf55",
                name: "Carlos Pereira",
                college: {
                    name: "Faculdade Central",
                    course: "Sistemas de Informação",
                    type: "Tecnólogo"
                },
                cpf: "733.256.300-22",
                rg: "192837465",
                birthdate: new Date("1995-03-05"),
                registration: new Date("2020-02-20"),
                created_at: new Date("2023-08-30"),
                updated_at: new Date("2024-08-30")
            })
        ];
    }
}
