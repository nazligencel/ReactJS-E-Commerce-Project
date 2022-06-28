export interface ILogin {
    status:  boolean;
    jwt?:     string;
    result?:  Result;
    message?: string;
}

export interface Result {
    createdBy?:          string;
    lastModifiedBy?:     string;
    createdDate?:        number;
    lastModifiedDate?:   number;
    id?:                 number;
    firstName?:          string;
    lastName?:           string;
    phone?:              string;
    email?:              string;
    password?:           string;
    enabled?:            boolean;
    tokenExpired?:       true;
    role?:               Role[];
    resetPasswordToken?: string;
}

export interface Role {
    id:   number;
    name: string;
}
