import { database } from "@/db/database";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

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
    <div className="flex flex-col items-center justify-between py-10 min-h-[calc(100vh-48px)] gap-10">
      <h1 className="text-4xl text-teal-900">
        {urlPart.checklist[id].title}
      </h1>
      <div className="flex items-center w-[50%] h-[90%] bg-teal-300">
        <Image 
            src="/app/img/parts/teste.png" 
            alt="engetak logo"
            width={0}
            height={0}
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
          />
      </div>
    </div>
  );
};

export default DetailSpace;
