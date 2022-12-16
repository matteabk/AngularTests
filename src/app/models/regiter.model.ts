import { AddressData } from "./address-data.model";
import { ContactInfo } from "./contact-info.model";


export interface RegisterForm {
    name: string;
    cpf: string;
    birthday: string;
    address: AddressData,
    contact: ContactInfo,
    username: string,
    password: string
}
  