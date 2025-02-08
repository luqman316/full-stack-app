import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact) private readonly contactRepository: Repository<Contact>,
    ){}

    getAllContacts(){
        return this.contactRepository.find();
        // return "hello from contact service";
    }

    createContact(name: string, fathername: string, email: string, phone: string, message: string, nature: string){
        const contact = this.contactRepository.create({
            name: name,
            fathername : fathername,
            email: email,
            phone: phone,
            message: message,
            nature: nature,
        });
        return this.contactRepository.save(contact);
    }

    // async deleteContact(id: number){
    //     // return "hello from delete contact service";
    //     const result = await this.contactRepository.delete(id);
    //     if (result.affected === 0) throw new Error('Product not found');
    //     return { message: 'Product deleted successfully' };
    // }

    async deleteContact(id: string): Promise<boolean> {
        const result = await this.contactRepository.delete(id);
        return result.affected > 0; // Returns true if a record was deleted
      }

}
