import DetailSpace from "@/components/DetailSpace";
import SideBar from "@/components/SideBar";

export default function Home({ params }: { params: { checklistId: string } }) {
  return (
    <div className="grid grid-cols-app">
      <SideBar checklistId={params.checklistId} />
      <DetailSpace checklistId={params.checklistId} />
    </div>
  );
}
