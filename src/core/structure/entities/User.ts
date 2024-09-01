import EntityError from "@errors/EntityError";

class UserProps {
    id!: string;
    name!: string;
    college!: {
        name: string;
        course: string;
        type: string;
    } | null;
    cpf!: string;
    rg!: string;
    birthdate!: Date;
    registration!: Date; // matrícula
    created_at!: Date;
    updated_at!: Date;
}

export default class User {
    id: string;
    name: string;
    college: object | null;
    cpf: string;
    rg: string;
    birthdate: Date;
    registration: Date;
    created_at: Date;
    updated_at: Date;

    constructor(user: UserProps) {
        this.id = this.validateID(user.id);
        this.name = this.validateName(user.name);
        this.college = this.validateCollege(user.college);
        this.cpf = this.validateCPF(user.cpf);
        this.rg = this.validateRG(user.rg);
        this.birthdate = this.validateBirthdate(user.birthdate);
        this.registration = this.validateRegistration(user.registration);
        this.created_at = this.validateCreatedAt(user.created_at);
        this.updated_at = this.validateUpdatedAt(user.updated_at);
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            college: this.college,
            cpf: this.cpf,
            rg: this.rg,
            birthdate: this.birthdate,
            registration: this.registration,
            created_at: this.created_at,
            updated_at: this.updated_at
        };
    }

    private validateID(id: string) {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        if (!uuidRegex.test(id))
            throw new EntityError(
                "Parameter id in User Entity is an invalid UUID"
            );
        return id;
    }

    private validateName(name: string) {
        if (name == null || name == "")
            throw new EntityError(
                "Parameter name in User Entity can't be null"
            );
        return name;
    }

    private validateCollege(college: UserProps["college"]) {
        return college;
    }

    private validateCPF(cpf: string) {
        cpf = cpf.replace(/\D/g, "");

        if (cpf.length !== 11) {
            throw new EntityError(
                "Parameter cpf in User Entity must have 11 chars"
            );
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            throw new EntityError(
                "Parameter cpf in User Entity has all same digits"
            );
        }

        const calculateDigit = (cpf: string, factor: number) => {
            let sum = 0;
            for (let i = 0; i < factor - 1; i++) {
                sum += parseInt(cpf[i]) * (factor - i);
            }
            const remainder = (sum * 10) % 11;
            return remainder === 10 || remainder === 11 ? 0 : remainder;
        };

        const firstDigit = calculateDigit(cpf, 10);
        if (firstDigit !== parseInt(cpf[9])) {
            throw new EntityError(
                "Parameter cpf in User Entity has first digit invalid"
            );
        }

        const secondDigit = calculateDigit(cpf, 11);
        if (secondDigit !== parseInt(cpf[10])) {
            throw new EntityError(
                "Parameter cpf in User Entity has second digit invalid"
            );
        }

        return cpf;
    }

    private validateRG(rg: string) {
        const rgLimpo = rg.replace(/\D/g, "");
        if (rgLimpo.length !== 9)
            throw new EntityError(
                "Parameter rg in User Entity must have 9 chars"
            );
        if (/^(\d)\1+$/.test(rgLimpo))
            throw new EntityError(
                "Parameter rg in User Entity has all same chars"
            );
        return rg;
    }

    private validateBirthdate(birthdate: Date) {
        if (birthdate == null)
            throw new EntityError(
                "Parameter birthdate in User Entity can't be null"
            );
        return birthdate;
    }

    private validateRegistration(registration: Date) {
        if (registration == null)
            throw new EntityError(
                "Parameter registration in User Entity can't be null"
            );
        return registration;
    }

    private validateCreatedAt(created_at: Date) {
        if (created_at == null)
            throw new EntityError(
                "Parameter created_at in User Entity can't be null"
            );
        return created_at;
    }

    private validateUpdatedAt(updated_at: Date) {
        if (updated_at == null)
            throw new EntityError(
                "Parameter updated_at in User Entity can't be null"
            );
        return updated_at;
    }
}
