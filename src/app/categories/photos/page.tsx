import Card from "@/components/Card";

export default function PhotosPage() {
  return (
    <main>
      <div className={"flex flex-wrap gap-2"}>
        <Card
          name={"Pantera"}
          creator={"Maks"}
          imageUrl={
            "https://parkpatriot.ru/upload/iblock/597/f1t0d6gh6fjnwyezhio8kbsn2pw4nu7v/anons.jpg"
          }
          tags={["German", "WW2", "1943"]}
        />
      </div>
    </main>
  );
}
