import config from "../config/config";
import { Client, Databases, ID,Query,Storage } from "appwrite";


export class Service {

    client = new Client();
    databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

    }

    async createPost(slug, title, content, featuredImage, status, UserID) {
       try{
        return await this.databases.createDocument(
            
            config.appwriteUrl, config.appwriteCollectionId, slug, {
            title, content, featuredImage, status, UserID
        }


        )
    } catch (error){
        console.log("Appwrite  error",error)
    }


    }



    async updatePost(slug,title, content, featuredImage){
        try{
            return await this.databases.updateDocument(
                
                config.appwriteUrl, config.appwriteCollectionId, slug, {
                title, content, featuredImage
            }
    
    
            )
        } catch (error){
            console.log("Appwrite  error",error)
        }
    

    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appwriteUrl,
                config.appwriteCollectionId,
                config.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Appwrite  error",error)
        }
    }


    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaeId,config.appwriteCollectionId,queries
            )
        }
    
    catch(error){
        console.log("Error0", error)

    }
}


async deletePost(slug){

    try{
        return await this.databases.deleteDocument(
            config.appwriteDatabaeId,config.appwriteCollectionId,slug
        )
    }
    catch (error){

    console.log("error occurred during Delete",error)
    }
}


getFilePreview(field){
    return this.getFilePreview(
        config.appwriteBucketId,field
    )
}









}

const service = new Service();

export default service



