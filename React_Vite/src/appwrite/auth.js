/* eslint-disable */
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService { 

client=new Client();
account;
constructor(){
    this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);
        this.account= new Account(this.client)
    
}

async login(email,password){
   
    return await this.account.createEmailPasswordSession(email,password);
   
}
async createAccount({emailAddress,password}){
    try {
    const userAccess = await this.account.create(
        ID.unique(),emailAddress,password)

        if (userAccess){

            return this.login(emailAddress,password)
        } else 
        return userAccess;
    } 
    catch (error){
        throw error;
    }
    
}


async getUser(){
    try {
        return await this.account.get();
    }
    catch (error){
        console.log(error);
        
    }

    return null;
}

}

const authService = new AuthService();


export default AuthService;