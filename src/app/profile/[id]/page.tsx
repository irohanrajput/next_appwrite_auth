export default function UserProfile({params}: any){
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py-2">
            <h1>profile</h1>
            <p>profile page for {params.id}</p>
        </div>
      );    
}