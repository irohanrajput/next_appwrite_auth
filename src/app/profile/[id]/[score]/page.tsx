export default function UserProfile({params}: any){
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen py-2">
            <h1>profile</h1>
            <p>score for {params.id} is {params.score}</p>
        </div>
      );    
}