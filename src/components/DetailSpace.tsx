import { database } from "@/db/database";
import Image from "next/image";
import Paper from '@mui/material/Paper';

type DetailSpaceProps = {
  checklistId: string;
};

const DetailSpace: React.FC<DetailSpaceProps> = ( { checklistId } ) => {
  
  const hyphenIndex = checklistId.indexOf('-');
  const name = checklistId.slice(0, hyphenIndex);
  const id = Number(checklistId.slice(hyphenIndex + 1));

  const urlPart = database.find(part => part.name === name);

  if (!urlPart) {
    return <div>peça não encontrada</div>;
  }

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-3rem)] bg-teal-900
    w-screen sm:w-full">
      <Paper
        className="rounded-2xl" 
        elevation={8}>
        <Image 
          className="rounded-2xl" 
          src={"/src/db/esquadreta/01.png"}
          alt="engetak logo"
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
          objectFit="cover"
          quality={100}
        />
        
      </Paper>
    </main>
  );
};

export default DetailSpace;
