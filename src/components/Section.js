import Card from "./Card";

export default function Section({content}) {
  console.log('content',content)
  return (
    <div className="section border-style">
      <div className="section-style">
        <div className="section-title">{content.title}</div>
        <Card
          imageSource={content.imageSource}
          isTitleCard={content.isTitle}
          description={content.description}
          project={content.projects}
        />
      </div>
    </div>
  );
}
