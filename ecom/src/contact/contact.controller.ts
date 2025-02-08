import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Get()
    getAllContacts() {
        return this.contactService.getAllContacts();
    }

    @Post()
    createContact(@Body("name") name:string, @Body("fathername") fathername:string, @Body("email") email: string, @Body("phone") phone: string, 
    @Body("message") message: string, @Body("nature") nature: string) {
        return this.contactService.createContact(name, fathername,email, phone, message, nature);
    }

    // @Delete(':id')
    // deleteContact(@Param('id') id: string) {
    //     return this.contactService.deleteContact(Number(id));
    // }
    @Delete(':id')
  async deleteContact(@Param('id') id: string) {
    const result = await this.contactService.deleteContact(id);
    if (!result) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Contact deleted successfully' };
  }
}
