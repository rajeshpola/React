const config ={
    appwriteUrl : String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaeId:String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID)
}

export default config