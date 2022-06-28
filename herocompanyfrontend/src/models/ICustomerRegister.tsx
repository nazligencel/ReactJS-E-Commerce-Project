export interface ICustomerRegister {
    status?: boolean;
    result?: Result;
}

export interface Result {
    createdBy?:        string;
    lastModifiedBy?:   string;
    createdDate?:      number;
    lastModifiedDate?: number;
    id?:               number;
    customerName?:     string;
    customerSurname?:  string;
    email?:            string;
    password?:         string;
    phone?:            string;
    enabled?:          boolean;
    tokenExpired?:     boolean;
    verificationCode?: null;
    role?:             Role;
}

export interface Role {
    id?:   number;
    name?: string;
}
