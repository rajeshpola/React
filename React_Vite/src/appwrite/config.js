import config from "../config/config";
import { Client, Databases, ID } from "appwrite";


export class Service{

    client=new Client();
    databases ;

    constructor(){

        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client);

    }

     createDatabases(){
        this.databases.createDocument(config.appwriteDatabaeId,config.appwriteCollectionId,ID.unique())

    }


}





