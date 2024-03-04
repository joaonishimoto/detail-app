import { database } from "@/db/database";
import Image from "next/image";
import VerticalLinearStepper from "./Stepper";

type SideBarProps = {
  checklistId: string;
};



const SideBar: React.FC<SideBarProps> = ( { checklistId } ) => {

  const hyphenIndex = checklistId.indexOf('-');
  const name = checklistId.slice(0, hyphenIndex);
  const id = Number(checklistId.slice(hyphenIndex + 1));

  const urlPart = database.find(part => (part.name === name));

  if (!urlPart) {
    return <div>peça não encontrada</div>;
  }

  const checklistItems = urlPart.checklist.map((item, index) => (
    <li key={index}>
      <label className="">
        <input type="checkbox" className="mr-2 text-teal-900"/>
        {item.title}
      </label>
    </li>
  ));

  return (
    <div className="border-r border-teal-300 text-teal-900 relative h-[calc(100vh-48px)] overflow-hidden">
      <div className="overflow-y-scroll h-full">
        <ul className="ml-3 text-teal-900 space-y-2 ">
          <VerticalLinearStepper />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
