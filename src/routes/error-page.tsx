import { useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center bg-black text-white min-h-screen w-full">   
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-black">Oops!</h1>
        <p className="text-xl font-bold text-red-600">Sorry, an unexpected error has occurred. <span>{error.statusText || error.message}</span></p>

        <Button variant="destructive" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </div>
  );
}