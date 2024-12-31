import Project from "./Project";
export default function Card({
  imageSource,
  isTitleCard,
  description,
  project,
}) {
  var cardDisplayType = "card ";
  cardDisplayType = isTitleCard
    ? (cardDisplayType += "titleCard")
    : cardDisplayType;

    console.log('Card',project)
  return (
    <div className={cardDisplayType}>
      {isTitleCard && (
        <>
          <div className="titleCardImage">
            <img src={imageSource} className="image" alt="profile" />
          </div>
          <div className="titleCardDescription">{description}</div>
        </>
      )}

      {!isTitleCard && (
        <div className='project-row'>
          {project.map((x, key) => (
            <Project project={x} projectkey={key} />
          ))}
        </div>
      )}
    </div>
  );
}
